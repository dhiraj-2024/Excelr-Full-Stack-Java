import React from 'react'
import { Card } from './card';
import data from '../api/seriesData.json'

export const AllCards = () => {
    return (
        <section className="w-full">
            <ul className="">
                {data.map((element) => {
                    return (
                        <Card key={element.key} element={element} />
                    );
                })}
            </ul>
        </section>
    );
}
