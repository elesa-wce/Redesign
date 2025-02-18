import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

const events = [
  { title: "Meraki", date:"2024", desc: "An intraclub event held for exclusively for Joint Board members to test and enhance their skills in different fields" },
  { title: "Teachers' Day", date:"2024-09", desc: "Waiting..." },
  { title: "Electrovert", date:"2024-10", desc: "Mega event of ELESA consisting of 10 different sub-events of Technical and Non-technical domains" },
  { title: "Alumni Meet", date:"2025-01", desc: "A joyous reunion of the alumni of Electronics Department, reliving and sharing their memories" },
  { title: "Roboholic", date:"2025-03", desc: "An intraclub robo-fight competition based on different themes for each year" },
];

const EventCard = ({ event }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const eventDate = new Date(event.date);
  const currentDate = new Date();
  const status = eventDate < currentDate ?"Done":"Upcoming";
  // const statusColor = eventDate < currentDate ? "text-green-500":"text-blue-500"
  return (
    <motion.div
      ref={ref}
      className="event-card"
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="event-title">{event.title}</h3>
      <p className={`${eventDate < currentDate ? "event1":"event2"}`}>{status}</p>
      <p className="event-date">{event.date}</p>
      <p className="event-desc">{event.desc}</p>
    </motion.div>
  );
};

function Events(){
  const scrollRef = useRef(null);

  return (
    <div className="events-container">
      <h2 className="event-heading">Our Events</h2>
      <motion.div 
        ref={scrollRef}
        className="events-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </motion.div>
    </div>
  );
};

export default Events;
