// Import necessary modules and components
import { FC } from 'react';
import Image from 'next/image'; // Ensure you use this if you plan to add images
import Heading from '@/Components/Ui/Heading';
import Link from 'next/link'; // Ensure you use this if you plan to add links

interface Props {}

const Page: FC<Props> = (props): JSX.Element => {
  return (
    <div className="container mx-auto px-4">
      <div className="w-full lg:w-4/5 mx-auto text-center py-12">
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
  );
};

export default Page;
