import React from 'react'
import { Card } from '../Cards/card';
import data from '../../api/seriesData.json'

export const AllCards = () => {
    return (
      <section className=" border-2 border-green-500 flex w-full flex-wrap p-5 h-auto justify-center items-center gap-5">
          {data.map((element) => {
            return <Card key={element.id} element={element} />;
          })}
      </section>
    );
}
