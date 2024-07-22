import React from "react"

export default function Listings(props){
    console.log(props)
    return (
        <div className="flex m-10 text-xs">
            <img src={props.imageUrl} alt="" />
            <div className="mx-5 flex flex-col gap-2 my-auto">
                <div className="flex flex-row gap-2">
                    <img className="w-[7px] h-[10px] my-auto" src="./assets/address.png" alt="" />
                    <p>{(props.location).toUpperCase()}</p>
                    <a className="text-gray-500 underline" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <p className="text-2xl font-bold">{props.title}</p>
                <p className="font-semibold">{props.startDate} - {props.endDate}</p>
                <p className="text-[#2B283A]">{props.description}</p>
            </div>
        </div>
    )
}