"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link, ExternalLink } from "lucide-react";
import { Projects } from "../constants/constants";

const ITEM_WIDTH = 430;
const GAP = 32;

export default function ScrollHorizontal() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalDistance = (Projects.length - 1) * (ITEM_WIDTH + GAP);

  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <section id="projects">
      <div ref={containerRef} className="scroll-container">
        <div className="sticky-wrapper">
          <motion.div className="gallery" style={{ x }}>
            {Projects.map((item, i) => (
              <motion.div
                key={i}
                className="card"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                {/* IMAGE */}
                <div className="image-wrap">
                  <img src={item.img} alt={item.name} className="card-image" />

                  <div className="overlay" />

                  {/* LINKS */}
                  <div className="top-links">
                    {item.githubLink && (
                      <a
                        href={item.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-btn"
                      >
                        <Link size={18} />
                      </a>
                    )}

                    {item.siteLink && (
                      <a
                        href={item.siteLink}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-btn"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="content">
                  {/* BADGES */}
                  <h2>{item.name}</h2>
                  <div className="badges">
                    {item.tools?.map((tool: string, index: number) => (
                      <span key={index} className="badge">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <StyleSheet />
    </section>
  );
}

function StyleSheet() {
  return (
    <style>{`
      body{
        overflow-x:hidden;
      }

      #projects{
        width:100%;
      }

      .scroll-container{
        height:320vh;
        position:relative;
      }

      .sticky-wrapper{
        position:sticky;
        top:0;
        height:100vh;
        display:flex;
        align-items:center;
        overflow:hidden;
        padding-left:7vw;
      }

      .gallery{
        display:flex;
        gap:${GAP}px;
        will-change:transform;
      }

      .card{
        width:${ITEM_WIDTH}px;
        border-radius:24px;
        overflow:hidden;
        flex-shrink:0;
        background:rgba(255,255,255,0.04);
        border:1px solid rgba(255,255,255,0.08);
        backdrop-filter:blur(12px);
        box-shadow:
          0 10px 30px rgba(0,0,0,0.25);
      }

      /* IMAGE */
      .image-wrap{
        position:relative;
        height:250px;
        overflow:hidden;
      }

      .card-image{
        width:100%;
        height:100%;
        object-fit:cover;
        display:block;
        transition:0.4s ease;
      }

      .card:hover .card-image{
        transform:scale(1.08);
      }

      .overlay{
        position:absolute;
        inset:0;
        background:linear-gradient(
          to top,
          rgba(0,0,0,0.7),
          rgba(0,0,0,0.1)
        );
      }

      .top-links{
        position:absolute;
        top:14px;
        right:14px;
        display:flex;
        gap:10px;
        z-index:5;
      }

      .icon-btn{
        width:38px;
        height:38px;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        color:white;
        background:rgba(255,255,255,0.12);
        border:1px solid rgba(255,255,255,0.15);
        transition:0.25s;
      }

      .icon-btn:hover{
        background:#0ea5e9;
        transform:translateY(-2px);
      }

      /* CONTENT */
      .content{
        padding:22px;
        gap:12px;
      }

      .content h2{
        font-size:1.45rem;
        font-weight:700;
        color:white;
      }

      .content p{
        color:rgba(255,255,255,0.75);
        font-size:0.95rem;
        line-height:1.6;
        min-height:85px;
        margin-top:15px;
      }

      /* BADGES */
      .badges{
        display:flex;
        flex-wrap:wrap;
        gap:10px;
        margin-top:15px;
      }

      .badge{
        padding:8px 12px;
        font-size:0.8rem;
        border-radius:12px;
        color:#7dd3fc;
        background:rgba(14,165,233,0.08);
        border:1px solid rgba(14,165,233,0.25);
      }

      /* MOBILE */
      @media (max-width:768px){
        .scroll-container{
          height:auto;
        }

        .sticky-wrapper{
          position:relative;
          height:auto;
          padding:20px;
          overflow-x:auto;
        }

        .gallery{
          transform:none !important;
        }

        .card{
          width:320px;
          min-height:540px;
        }

        .image-wrap{
          height:210px;
        }
      }
    `}</style>
  );
}
