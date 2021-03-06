import React from "react";

export default function UpcommingElections({ majorElections }) {
  return (
    <section className="mx-auto py-4 pt-12">
      <div className="container w-10/12 mx-auto max-w-screen-xl">
        <div className="flex flex-wrap mx-4 mb-10 m-auto">
          <div className="flex flex-col mb-10">
            <h2 className="font-bold text-[35px] md:text-[3rem]  text-[#023a51] ">
              Upcomming Major Elections - U.S.A
            </h2>
          </div>

          <div className="container w-12/12 mx-auto px-[10px] pb-[10px] bg-[#efeded] max-w-screen-xl rounded-lg">
            <div className="flex justify-between flex-row ">
              <h2 className="my-4 font-bold text-[1rem] leading-[40px] md:leading-[50px] md:text-[1.5rem] bg-[#e0ecf0]  w-[65%]  rounded-lg h-[40px] md:h-[50px]  text-center">
                Election Name
              </h2>
              <h2 className="my-4 font-bold text-[1rem] leading-[40px] md:leading-[50px] md:text-[1.5rem] bg-[#e0ecf0]  w-[30%]  rounded-lg h-[40px] md:h-[50px]  text-center">
                Date
              </h2>
            </div>

            {majorElections
              ?.map((item, index) => {
                return (
                  <div key={index} className="flex justify-between flex-row ">
                    <h2
                      key={index}
                      type="text"
                      className=" mb-2 font-bold leading-[30px] md:leading-[40px] md:text-[1rem] text-[.7rem]  bg-[#fff]  w-[65%] whitespace-nowrap text-ellipsis overflow-hidden rounded-lg h-[30px] md:h-[40px] px-[10px] "
                    >
                      {item.name}
                    </h2>
                    <h2
                      key={index}
                      type="text"
                      className="mb-2 font-bold leading-[30px] md:leading-[40px] md:text-[1rem] text-[.7rem] bg-[#fff]  w-[30%]  rounded-lg h-[30px] md:h-[40px] text-center "
                    >
                      {item.electionDay}
                    </h2>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
