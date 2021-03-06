import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import placeholderImg from "../assets/images/Profile_avatar_placeholder_large.png";
import Joseph from "../assets/images/P20210303AS-1901-cropped.webp";
import Kamala from "../assets/images/Kamala_Harris_Vice_Presidential_Portrait.jpg";
import { FaLink } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { useRouter } from "next/router";
export default function ElectedRepresentatives({ officials, address }) {
  const router = useRouter();
  const { index } = router.query;
  const stateName = index;
  const array = officials.map((item) => {
    return item.office.levels[0]
  })
  let uniq = a => [...new Set(a)];
  const filtered = uniq(array);

  const [filter, setFilter] = useState({
    all: true,
    administrativeArea1: false,
    administrativeArea2: false,
    country: false,
    international: false,
    locality: false,
    regional: false,
    special: false,
    subLocality1: false,
    subLocality2: false,
    filterName: "all",
  });
  const filterData = (item) => {
    setFilter({
      all: item === 'all' ? true : false,
      administrativeArea1: item === 'administrativeArea1' ? true : false,
      administrativeArea2: item === 'administrativeArea2' ? true : false,
      country: item === 'country' ? true : false,
      international: item === 'international' ? true : false,
      locality: item === 'locality' ? true : false,
      regional: item === 'regional' ? true : false,
      special: item === 'special' ? true : false,
      subLocality1: item === 'subLocality1' ? true : false,
      subLocality2: item === 'subLocality2' ? true : false,
      filterName: item,
    })
  }
  const colored =
    "bg-[#023a51]  max-w-fit  py-[5px] px-[15px] md:text[16px] lg:text-[18px] md:leading-[18px] lg:py-[15px]   rounded-[5px] mt-4 mx-[5px] font-bold text-[12px] leading-[13px] text-[#fff]  border-yellow";
  const white =
    "bg-[#fff] max-w-fit py-[5px] px-[15px]  md:text[16px] lg:text-[18px] md:leading-[18px] lg:py-[15px] rounded-[5px] mt-4 mx-[5px]  font-bold text-[12px] leading-[13px] text-[#023a51]  border-yellow";
  return (
    <>
      <section className="mx-auto py-4 pt-12">
        <div className="container w-10/12 mx-auto max-w-screen-xl">
          <div className="flex flex-wrap mx-4 mb-10 m-auto">
            <div className="flex flex-col">
              <h2 className="font-bold text-[27px] md:text-[55px] leading-[50px] mb-2 text-[#023a51]">
                The Elected Directory [{address || stateName}]
              </h2>
            </div>
            <div className="container w-12/12 mx-auto  max-w-screen-xl rounded-lg mt-[0.5rem]">
              {officials.length !== 0 ?
                <>

                  <h6 className="font-bold text-[23px] lg:text-[28px] leading-[47px]  my-4 text-[#023a51]">
                    Filter by Official&apos;s Level: ({filter.filterName})
                  </h6>
                  <div className="flex flex-wrap mb-10 mt-[0.5rem] items-center m-auto">

                    <button
                      onClick={() => {
                        setFilter({
                          all: true,
                          administrativeArea1: false,
                          administrativeArea2: false,
                          country: false,
                          international: false,
                          locality: false,
                          regional: false,
                          special: false,
                          subLocality1: false,
                          subLocality2: false,
                          filterName: "all",
                        });
                      }}
                      className={filter.all ? colored : white}
                    >
                      All
                    </button>
                    {
                      filtered?.map((item, index) => {
                        return <button
                          key={index}
                          onClick={() => filterData(item)}
                          className={filter.filterName === item ? colored : white}
                        >
                          {item.toUpperCase()}
                        </button>
                      })
                    }

                  </div>
                </>
                :

                (<h6 className="font-bold text-[23px] lg:text-[28px] leading-[47px]  my-4 text-[#023a51]">Oops; Not Available. <br /> Please, Make sure to Enter a valid Address. </h6>)
              }
            </div>
          </div>
        </div>
      </section>


      <section className="mx-auto ">
        <div className="container w-10/12 mx-auto max-w-screen-xl">
          <div className="flex flex-wrap mb-10 m-auto">
            <div className="container w-12/12 mx-auto max-w-screen-xl rounded-lg">
              <div className="flex flex-wrap mx-2 mb-10 m-auto justify-start">
                {officials.length !== 0 &&
                  filter.filterName === "all" &&
                  officials?.map((item, index) => {
                    const {
                      name,
                      address,
                      party,
                      urls,
                      emails,
                      photoUrl,
                      office,
                      channels,
                      phones,
                    } = item;
                    return (
                      <div
                        key={index}
                        className="card flex flex-col w-[100%] h-[600px] md:w-[45%] mb-[20px] mx-[4px] lg:w-[32%] rounded-lg "
                      >
                        {photoUrl ? (
                          <div className="img_container">
                            <Image
                              src={`/api/imageProxy?url=${encodeURIComponent(
                                photoUrl
                              )}`}
                              alt="photo"
                              width={"100%"}
                              height={"100%"}
                              layout="responsive"
                              className=" h-[100px] rounded-lg"
                            />
                          </div>
                        ) : name === "Joseph R. Biden" ? (
                          <div className="img_container">
                            <Image
                              src={Joseph}
                              width={"100%"}
                              height={"100%"}
                              layout="responsive"
                              alt="photo"
                              className=" h-[100px] rounded-lg"
                            />
                          </div>
                        ) : name === "Kamala D. Harris" ? (
                          <div className="img_container">
                            <Image
                              src={Kamala}
                              width={"100%"}
                              height={"100%"}
                              layout="responsive"
                              alt="photo"
                              className="grow-0 h-[100px] rounded-lg"
                            />
                          </div>
                        ) : (
                          <div className="img_container">
                            <Image
                              src={placeholderImg}
                              width={"100%"}
                              height={"100%"}
                              layout="responsive"
                              alt="photo"
                              className="grow-0 h-[100px] rounded-lg"
                            />
                          </div>
                        )}
                        <div className="official_info grow">
                          <p title={office.name} className=" text-[14px] office_name py-[5px] ">
                            {office.name}
                          </p>
                          <h1 className="text-[20px] sm:text-[23px] text-[#023a51] font-bold ">
                            {name}
                          </h1>

                          <p className=" py-[5px]"> {party}</p>
                          {address?.map((item, index) => {
                            return (
                              <div key={index} className="flex">
                                <FaMapMarkerAlt
                                  color="#023a51"
                                  size={30}
                                  className="pt-[10px]"
                                />{" "}
                                <p title={item?.line1 + " " + item?.city + " " + item?.state + " " + item?.zip} className="ml-[5px] text-[14px] official_email official_address py-[10px] ">
                                  {item.line1} {item.city} {item.state}{" "}
                                  {item.zip}
                                </p>
                              </div>
                            );
                          })}
                          {emails && (
                            <Link href={`mailto:${emails}`} passHref>
                              <a>
                                <div className="flex">
                                  <MdAlternateEmail
                                    title={emails}
                                    color="#023a51"
                                    size={30}
                                    className="pt-[3px] hover:text-[#000]"
                                  />
                                  <p title={emails} className="ml-[5px] mt-[5px] text-[#023a51] truncate  ">
                                    {emails}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          )}
                          <div
                            className="text-center flex items-center flex-wrap jutify-center "
                            style={{ margin: "30px 0" }}
                          >
                            {channels?.map((item, index) => {
                              return item.type == "Facebook" ? (
                                <Link
                                  className="hover:text-[#000]"
                                  key={index}
                                  href={`https://www.facebook.com/${item.id}`}
                                  passHref
                                >
                                  <a>
                                    <TiSocialFacebookCircular
                                      title={item.id}
                                      color="#023a51"
                                      size={30}
                                      className="mx-[10px] mb-[5px] hover:text-[#000]"
                                    />
                                  </a>
                                </Link>
                              ) : item.type == "Twitter" ? (
                                <Link
                                  href={`https://www.twitter.com/${item.id}`}
                                  passHref
                                >
                                  <a>
                                    <TiSocialTwitter
                                      title={item.id}
                                      color="#023a51"
                                      size={30}
                                      className="mx-[10px] mb-[5px] hover:text-[#000]"
                                    />
                                  </a>
                                </Link>
                              ) : item.type == "YouTube" ? (
                                <Link
                                  href={`https://www.youtube.com/${item.id}`}
                                  passHref
                                >
                                  <a>
                                    <TiSocialYoutubeCircular
                                      title={item.id}
                                      color="#023a51"
                                      size={30}
                                      className="mx-[10px] mb-[5px] hover:text-[#000]"
                                    />
                                  </a>
                                </Link>
                              ) : null;
                            })}

                            {urls?.map((item, index) => {
                              return (
                                <Link
                                  className="hover:text-[#000] mb-[5px] "
                                  key={index}
                                  href={item}
                                  passHref
                                >
                                  <a>
                                    <FaLink
                                      title={item}
                                      size={"20px"}
                                      color="#023a51"
                                      className="mx-[10px]"
                                    />
                                  </a>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                        <a
                          href={`tel:${phones}`}
                          className="contact_btn rounded-b-lg"
                        >
                          Contact
                        </a>
                      </div>
                    );
                  })
                }


                {officials.length !== 0 &&
                  filter.filterName !== "all" &&
                  officials
                    ?.filter(
                      (official) =>
                        official.office.levels[0] === filter.filterName
                    )
                    .map((item, index) => {
                      const {
                        name,
                        address,
                        party,
                        urls,
                        emails,
                        photoUrl,
                        office,
                        channels,
                        phones,
                      } = item;
                      return (
                        <div
                          key={index}
                          className="card flex flex-col rounded-lg w-[100%] h-[600px] md:w-[45%] mb-[20px] mx-[4px] lg:w-[32%]"
                        >
                          {photoUrl ? (
                            <div className="img_container">
                              <Image
                                src={`/api/imageProxy?url=${encodeURIComponent(
                                  photoUrl
                                )}`}
                                alt="photo"
                                width={"100%"}
                                height={"100px"}
                                layout="responsive"
                                className="rounded-lg"
                              />
                            </div>
                          ) : name === "Joseph R. Biden" ? (
                            <div className="img_container">
                              <Image
                                src={Joseph}
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                alt="photo"
                                className="grow-0 h-[100px] rounded-lg"
                              />
                            </div>
                          ) : name === "Kamala D. Harris" ? (
                            <div className="img_container">
                              <Image
                                src={Kamala}
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                alt="photo"
                                className="grow-0 h-[100px] rounded-lg"
                              />
                            </div>
                          ) : (
                            <div className="img_container">
                              <Image
                                className="officialsImage rounded-lg"
                                src={placeholderImg}
                                alt="photo"
                                width={"100%"}
                                height={"80px"}
                                layout="responsive"
                              />
                            </div>
                          )}
                          <div className="official_info grow">
                            <p className=" office_name py-[5px] ">
                              {office.name}
                            </p>
                            <h1 className="text-[23px] text-[#023a51] font-bold ">
                              {name}
                            </h1>
                            <p className=" py-[5px]">{party}</p>
                            {address?.map((item, index) => {
                              return (
                                <div key={index} className="flex">
                                  <FaMapMarkerAlt
                                    color="#023a51"
                                    size={30}
                                    className="pt-[10px]"
                                  />{" "}
                                  <p className=" ml-[5px] official_address py-[10px] ">
                                    {item.line1} {item.city} {item.state}{" "}
                                    {item.zip}
                                  </p>
                                </div>
                              );
                            })}
                            {emails && (
                              <Link href={`mailto:${emails}`} passHref>
                                <a>
                                  <div className="flex">
                                    <MdAlternateEmail
                                      color="#023a51"
                                      size={30}
                                      className="pt-[3px] hover:text-[#000]"
                                    />
                                    <p className="ml-[5px] mt-[5px] text-[#023a51] truncate   ">
                                      {emails}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            )}
                            <div
                              className="text-center flex items-center flex-wrap jutify-center "
                              style={{ margin: "30px 0" }}
                            >
                              {channels?.map((item, index) => {
                                return item.type == "Facebook" ? (
                                  <Link
                                    className="hover:text-[#000]"
                                    key={index}
                                    href={`https://www.facebook.com/${item.id}`}
                                    passHref
                                  >
                                    <a>
                                      <TiSocialFacebookCircular
                                        color="#023a51"
                                        size={30}
                                        className="mx-[10px] mb-[5px] hover:text-[#000]"
                                      />
                                    </a>
                                  </Link>
                                ) : item.type == "Twitter" ? (
                                  <Link
                                    href={`https://www.twitter.com/${item.id}`}
                                    passHref
                                  >
                                    <a>
                                      <TiSocialTwitter
                                        color="#023a51"
                                        size={30}
                                        className="mx-[10px] mb-[5px] hover:text-[#000]"
                                      />
                                    </a>
                                  </Link>
                                ) : item.type == "YouTube" ? (
                                  <Link
                                    href={`https://www.youtube.com/${item.id}`}
                                    passHref
                                  >
                                    <a>
                                      <TiSocialYoutubeCircular
                                        color="#023a51"
                                        size={30}
                                        className="mx-[10px] mb-[5px] hover:text-[#000]"
                                      />
                                    </a>
                                  </Link>
                                ) : null;
                              })}

                              {urls?.map((item, index) => {
                                return (
                                  <Link
                                    className="hover:text-[#000] mb-[5px] "
                                    key={index}
                                    href={item}
                                    passHref
                                  >
                                    <a>
                                      <FaLink
                                        size={"20px"}
                                        color="#023a51"
                                        className="mx-[10px]"
                                      />
                                    </a>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                          <a
                            href={`tel:${phones}`}
                            className="contact_btn rounded-b-lg"
                          >
                            Contact
                          </a>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
