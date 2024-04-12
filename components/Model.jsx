"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import dynamic from 'next/dynamic';
import { useState, useRef } from "react";
import { yellowImg } from "@/utils";
import * as THREE from 'three';

const Model = () => {
  const ModelView = dynamic(() => import("@/components/ModelView"), {
    ssr: false,
  });

  const [size, setSize] = useState('small');
  const [model, setModel] = useState({
    title: 'iPhone 15 Pro is Natural Titanium',
    color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
    img: yellowImg,
  });

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 100 });
  }, []);

  return (
    <section className="py-20 w-full h-full overflow-hidden">
      <div className="sm:px-10 px-5">
        <h1 id="heading" className="section-heading tracking-tighter">
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden">
            <ModelView />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
