// the head is for SEO, you must add some meta tags for whole site
import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

const DUMMY_MEETUPS = [
  {
    id: 1,
    title: 'React Meetup',
    image: 'https://source.unsplash.com/random',
    address: '123 Main St',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    title: 'Vue Meetup',
    image: 'https://source.unsplash.com/random',
    address: '123 Main St',
    description: 'some description',
  },
  {
    id: 3,
    title: 'Angular Meetup',
    image: 'https://source.unsplash.com/random',
    address: '123 Main St',
    description: 'some description',
  },
];

function HomePage(props) {
  // no longer if we use getStaticProps
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='This is the home page' />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
}

// this is used to get the data from the server dinamically
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// this is use for getting data from the server and passing it to the component
// and deploying to the client in the build process
export async function getStaticProps() {
  // fetch data from external API or DB
  const client = await MongoClient.connect(
    'mongodb+srv://juanfri2211:vNAdoMjm1hJmI1p7@test1.1wphs.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // that's request data even 10 seconds after the page is loaded
    revalidate: 1,
  };
}

export default HomePage;
