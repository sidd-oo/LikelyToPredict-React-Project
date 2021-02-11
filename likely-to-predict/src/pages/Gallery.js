import React from 'react'
import { Images } from '../components/Images';

export default function Gallery() {
    return (
      <section className="flex flex-wrap justify-center">
        <div className="w-10/12 text-center">
          <Images />
        </div>
      </section>
    );
}

