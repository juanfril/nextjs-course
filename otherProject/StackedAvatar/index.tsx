type Props = {
  images?: string[];
};

export const StackedAvatar = ({
  images = ['https://avatars.githubusercontent.com/u/74176684?v=4'],
}: Props) => {
  return (
    <>
      <div className='flex'>
        {images?.map((image, key) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className='first:ml-0 w-14 h-14 rounded-full object-cover -ml-3 border border-black'
            key={key}
            alt='pepe'
            src={image}
          />
        ))}
      </div>
    </>
  );
};
