import React, { useEffect, useState } from "react";
import axios from "axios";

const RightBarMenu = ({ className = "" }) => {
  const [events, setEvents] = useState([]);
  const [articles, setArticles] = useState([]);
  const [moments, setMoments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const eventsResponse = await axios.get("/api/events");
        const articlesResponse = await axios.get("/api/articles");
        const momentsResponse = await axios.get("/api/moments");

        setEvents(eventsResponse.data);
        setArticles(articlesResponse.data);
        setMoments(momentsResponse.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className={`w-[281px] mr-20 flex flex-col items-start justify-start gap-[50px] text-left text-base text-dark font-inter mq450:gap-[25px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        {/* Up Coming Event */}
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-xs text-big-black">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-base text-dark">
            <b className="w-40 relative tracking-[-0.02em] leading-[32px] font-bold inline-block shrink-0">
              Up Coming Event
            </b>
            <div className="relative text-xs tracking-[-0.02em] leading-[32px] text-big-blue inline-block min-w-[41px]">
              view all
            </div>
          </div>
          {events.map((event) => (
            <div
              key={event.id}
              className="self-stretch flex flex-row items-center justify-start gap-[10px]"
            >
              <img
                className="h-12 w-12 relative rounded-lg overflow-hidden shrink-0 object-cover min-h-[48px]"
                alt=""
                src="/images/dasboardImages/01-images--placeholder-square-2@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="self-stretch h-6 relative tracking-[-0.02em] leading-[24px] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                  <b>{event.title}</b>
                </div>
                <div className="relative text-3xs tracking-[-0.02em] leading-[24px] font-medium text-gray inline-block min-w-[83px]">
                  {event.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Today’s Article */}
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-xs text-big-black">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-base text-dark">
          <b className="w-40 relative tracking-[-0.02em] leading-[32px] font-bold inline-block shrink-0">
            Today’s Article
          </b>
          <div className="relative text-xs tracking-[-0.02em] leading-[32px] text-big-blue inline-block min-w-[41px]">
            view all
          </div>
        </div>
        {articles.map((article) => (
          <div
            key={article.id}
            className="self-stretch flex flex-row items-center justify-start gap-[10px]"
          >
            <img
              className="h-12 w-12 relative rounded-lg overflow-hidden shrink-0 object-cover min-h-[48px]"
              alt=""
              src="/images/dasboardImages/01-images--placeholder-square-2@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-center">
              <div className="self-stretch h-6 relative tracking-[-0.02em] leading-[24px] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                <b>{article.title}</b>
              </div>
              <div className="relative text-3xs tracking-[-0.02em] leading-[24px] font-medium text-gray inline-block min-w-[83px]">
                {article.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Today’s Moment */}
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-xs text-big-black">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-base text-dark">
          <b className="w-40 relative tracking-[-0.02em] leading-[32px] font-bold inline-block shrink-0">
            Today’s Moment
          </b>
          <div className="relative text-xs tracking-[-0.02em] leading-[32px] text-big-blue inline-block min-w-[41px]">
            view all
          </div>
        </div>
        {moments.map((moment) => (
          <div
            key={moment.id}
            className="self-stretch flex flex-row items-center justify-start gap-[10px]"
          >
            <img
              className="h-12 w-[54px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/images/dasboardImages/frame.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-center">
              <div className="self-stretch h-6 relative tracking-[-0.02em] leading-[24px] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                <b>{moment.title}</b>
              </div>
              <div className="relative text-3xs tracking-[-0.02em] leading-[24px] font-medium text-gray inline-block min-w-[83px]">
                {moment.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightBarMenu;
