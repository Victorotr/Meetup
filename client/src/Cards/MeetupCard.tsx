import React from "react";
import moment from "moment";

const MeetupCard = ({ meetup }) => {
  return (
    <div className="flex max-w-sm w-full  shadow-md ">
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg object-cover"
            src={
              import.meta.env.VITE_API_URL + "/getImage/" + meetup.meetup_image + "/Meetup"
            }
            alt=""
          />
        </a>
        <div className="p-5">
          <p>
            {moment(meetup.meetup_datetime).format("DD/MM/YYYY")} -{" "}
            {moment(meetup.meetup_time, "HH:mm:ss").format("HH:mm")}
          </p>
          <a href="#">
            <h4 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
              {meetup.meetup_title}
            </h4>
          </a>
          <p className="max-h-[130px] overflow-y-scroll mb-3 font-normal text-gray-700 dark:text-gray-400">
            {meetup.meetup_description}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Más detalles
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MeetupCard;