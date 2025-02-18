import { TypeAnimation } from "react-type-animation";
import { Canvas,useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useRef } from "react";
import Teams from "./Teams.jsx";
import {motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router";

function RotatingSphere(){
    const sphereRef = useRef()
    useFrame(()=>{
        if(sphereRef.current)
        {
            sphereRef.current.rotation.y += 0.0005;
            sphereRef.current.rotation.x += 0.0005;
            sphereRef.current.rotation.z += 0.0005;
        }
    })
    return (
        <Sphere ref={sphereRef} args={[4.5, 64, 64]}>
          {/* eslint-disable-next-line react/no-unknown-property */}
          <meshStandardMaterial wireframe color="#ff7700" />
        </Sphere>
      )
}

const ScrollFadeIn = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 20 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

const ScrollFadeTeam = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 20 }}
      transition={{ duration: 1 }}
      style={{ width: "100%" }} 
    >
      {children}
    </motion.div>
  );
};

function Home() {
  return (
    <motion.div 
      className="relative hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
    >
      <div className="btn">
        <Link to="/dashboard">
          <button>
              Admin
          </button>
        </Link>
      </div>
      <div className="hero-background">
      <Canvas>
          {/* eslint-disable-next-line react/no-unknown-property */}
          <ambientLight intensity={0.5} />
          <OrbitControls enableZoom={false} enableRotate={true} enablePan={false} rotateSpeed={0.7} minDistance={2} maxDistance={5} />
          <RotatingSphere/>
        </Canvas>
      </div>
      <div id="three-js-canvas">
        
      </div>
      <ScrollFadeIn>
        <motion.section 
          id="home" 
          className="relative z-10 text-center flex flex-col items-center justify-center min-h-screen"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
        >
          {/* Animated Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide neon-text">
            <TypeAnimation
              sequence={["ELESA", 1000, "Electronics Engineering Students' Association", 1500]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>

          <h2 className="mt-2 text-lg md:text-2xl text-gray-300">
            Integrated with Integrity
          </h2>
        </motion.section>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <motion.section 
          id="about" 
          className="relative z-10 bg-dark text-white py-16 px-6 md:px-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-400">
              About Us
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
            ELESA stands for Electronics Engineering Students' Association is a departmental Technical club of
              Electronics Department, established in 1992. Club comprises of the chief board, joint board and
              assistant board and has board strength of 65 board members. We idealize it's motto 'Integrated with
              Integrity'. Club provides a platform to all budding electronics engineers for a valuable exchange of
              ideas, and to bring out valuable decisions through scientific discussions .The club is being supported by
              faculty members and under their guidance and motivation, it has completed 32 years of its successful
              journey and will continue to do so. Here we arrange various events which tries to cover most of the
              engineering aspect of electronics engineering as well as other necessary fields according to the
              upgrading technology and need. The main motive is to impart knowledge and keep students in pace
              with the latest trends in technology. This is done by arranging various events, workshops, Hackathons,
              Ideathons, etc. and allowing students to take advantage by participating as well as arranging the
              events. Students here learn to solve, to present, to express, to innovate, to enjoy and to lead & these are
              major takeaways as an engineering student.
            </p>
          </div>
        </motion.section>
      </ScrollFadeIn>
      <ScrollFadeTeam>
        <Teams/>
      </ScrollFadeTeam>
    </motion.div>
  );
}

export default Home;
