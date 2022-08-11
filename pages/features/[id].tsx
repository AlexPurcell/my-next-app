import React from 'react'
import prisma from "../../prisma/client";

export default function Feature(props) {
  return (
    <div>{JSON.stringify(props.feature)}</div>
  )
}

export async function getServerSideProps(context) {
    const { id } = context.query;
    console.log(id)
    const feature = await prisma.featureRequest.findFirst({
        where: {
            id: id
        }
    })
    console.log("Feature ", feature)
    return { props: { feature } };
  }