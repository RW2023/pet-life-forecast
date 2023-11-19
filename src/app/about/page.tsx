import { FC } from 'react';
import Heading from '@/Components/Ui/Heading';

interface Props {}

const Page: FC<Props> = (props): JSX.Element => {
  return (
    // Use flex layout to ensure full height
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 flex-grow ">
        <div className="w-full lg:w-4/5 mx-auto text-center py-12 ">
          {/* Use the Heading component to display the title */}
          <Heading title="Pet Life Forecast" />

          {/* Description paragraph */}
          <p>
            Pet Life Forecast is a web application that allows pet owners to
            determine the human years of their pets.
          </p>

          {/* You can add Image or Link components here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Page;
