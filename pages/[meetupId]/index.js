import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';

function MeetupDetails(props) {
  return (
    <>
      <Head>
        <title>Meetup: {props.meetup.title}</title>
        <meta name='description' content={props.meetup.description} />
      </Head>
      <MeetupDetail
        image={props.meetup.image}
        title={props.meetup.title}
        address={props.meetup.address}
        description={props.meetup.description}
      />
    </>
  );
}

// this is mandatory if we want to use getStaticProps in dinaamic pages
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://juanfri2211:vNAdoMjm1hJmI1p7@test1.1wphs.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    // fallback tell nextjs if all the possible paths are in the array
    // false means that all the paths are in the array
    fallback: 'blocking',
  };
}

// this code below is executed in server, the console.log is not executed in the browser
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://juanfri2211:vNAdoMjm1hJmI1p7@test1.1wphs.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetup: {
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      },
    },
  };
}

export default MeetupDetails;
