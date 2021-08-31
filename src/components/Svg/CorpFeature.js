/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from "react";
import { makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  d001: {
    animation: `$001 1.6s`,
    animationIterationCount: "1",
  },
  "@keyframes 001": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 0.4,
    }
  },
  d002: {
    animation: `$002 1.6s`,
    animationIterationCount: "1",
  },
  "@keyframes 002": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    }
  },
  d003: {
    animation: `$003 9.6s`,
    animationIterationCount: "infinite",
    animationDelay: "1.6s",
  },
  "@keyframes 003": {
    "0%": {
      fill: "#218682",
    },
    "16%": {
      fill: "#931980",
    },
    "32%": {
      fill: "#f25122",
    },
    "48%": {
      fill: "#4efec9",
    },
    "64%": {
      fill: "#7fba01",
    },
    "80%": {
      fill: "#fea639",
    }
  },
  d004: {
    animation: `$004 9.6s`,
    animationIterationCount: "infinite",
    animationDelay: "1.6s",
  },
  "@keyframes 004": {
    "0%": {
      fill: "#218682",
    },
    "16%": {
      fill: "#931980",
    },
    "32%": {
      fill: "#f25122",
    },
    "48%": {
      fill: "#4efec9",
    },
    "64%": {
      fill: "#7fba01",
    },
    "80%": {
      fill: "#fea639",
    }
  },
}));


export default function CorpFeature() {
  const classes = useStyles();

  return (
    <svg width="572px" height="477px" viewBox="0 0 572 477" version="1.1" xmlns="http://www.w3.org/2000/svg" >
      <title>corp</title>
      <defs>
        <linearGradient x1="0%" y1="49.9974019%" x2="100%" y2="49.9974019%" id="linearGradient-1">
          <stop stop-color="#1F2024" stop-opacity="0.96" offset="0%"></stop>
          <stop stop-color="#0E0F11" stop-opacity="0.93" offset="100%"></stop>
        </linearGradient>
        <pattern id="pattern-2" width="57.2" height="26.6" x="-57.2" y="168.63" patternUnits="userSpaceOnUse">
        </pattern>
        <linearGradient x1="8.9301786%" y1="61.0570806%" x2="91.0698214%" y2="38.9429194%" id="linearGradient-4">
          <stop stop-color="#47484D" offset="0%"></stop>
          <stop stop-color="#212124" stop-opacity="0.95" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="44.1508897%" y1="91.6886837%" x2="55.8491103%" y2="8.31131625%" id="linearGradient-5">
          <stop stop-color="#7F7F86" stop-opacity="0" offset="12%"></stop>
          <stop stop-color="#7F7F86" stop-opacity="0.02" offset="48%"></stop>
          <stop stop-color="#7F7F86" stop-opacity="0.09" offset="73%"></stop>
          <stop stop-color="#7F7F86" stop-opacity="0.2" offset="94%"></stop>
          <stop stop-color="#7F7F86" stop-opacity="0.24" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="40.4524483%" y1="23.0590482%" x2="59.5450185%" y2="76.944135%" id="linearGradient-6">
          <stop stop-color="#4C4C53" stop-opacity="0.36" offset="2%"></stop>
          <stop stop-color="#606067" stop-opacity="0.22" offset="23%"></stop>
          <stop stop-color="#77777E" stop-opacity="0.06" offset="59%"></stop>
          <stop stop-color="#7F7F86" stop-opacity="0" offset="90%"></stop>
        </linearGradient>
        <linearGradient x1="8.92982456%" y1="61.0560988%" x2="89.52421%" y2="39.3575907%" id="linearGradient-7">
          <stop stop-color="#0091FF" offset="0%"></stop>
          <stop stop-color="#32C5FF" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="corp">
          <polygon id="Path" fill="url(#linearGradient-1)" fill-rule="nonzero" points="36 332.66 286 477 536 332.66 452.67 284.55 286 380.77 119.33 284.55"></polygon>
          <polygon id="Path" fill="url(#pattern-2)" fill-rule="nonzero" opacity="0.06" points="0 195.23 572 195.23 572 461.23 0 461.23"></polygon>
          <path d="M112.83,350 C118.17,353.09 126.4,353.34 131.22,350.56 L146.22,341.91 C152.75,338.14 152.16,331.7 144.91,327.51 C137.66,323.32 126.49,322.98 119.96,326.75 C115.07,329.58 114.17,333.92 117.09,337.68 C115.266,337.92 113.503,338.497 111.89,339.38 C107.05,342.2 107.48,347 112.83,350 L112.83,350 Z" id="Path" fill="#FFFFFF" fill-rule="nonzero" opacity="0.16"></path>
          <g id="Group" opacity="0.16" transform="translate(430.000000, 325.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path d="M5.54,20.19 C8.241,20.19 10.43,18.927 10.43,17.37 C10.43,15.813 8.241,14.55 5.54,14.55 C2.839,14.55 0.65,15.813 0.65,17.37 C0.65,18.927 2.839,20.19 5.54,20.19 Z M17.41,13.34 C20.111,13.34 22.3,12.077 22.3,10.52 C22.3,8.963 20.111,7.7 17.41,7.7 C14.709,7.7 12.52,8.963 12.52,10.52 C12.52,12.077 14.709,13.34 17.41,13.34 Z M29.29,6.48 C31.991,6.48 34.18,5.217 34.18,3.66 C34.18,2.103 31.991,0.84 29.29,0.84 C26.589,0.84 24.4,2.103 24.4,3.66 C24.4,5.217 26.589,6.48 29.29,6.48 Z" id="Shape"></path>
          </g>
          <g id="Cloud-2" transform="translate(171.000000, 363.000000)" fill-rule="nonzero">
            <polygon id="Path" fill="#F0B440" points="44.83 24.33 31.45 16.61 44.83 8.88 58.21 16.61"></polygon>
            <polygon id="Path" fill="#4CA1EB" points="29.45 33.21 16.07 25.49 29.44 17.76 42.82 25.49"></polygon>
            <polygon id="Path" fill="#7EB537" points="29.44 15.45 16.06 7.73 29.44 -5.68434189e-14 42.82 7.73"></polygon>
            <polygon id="Path" fill="#E54F27" points="14.06 24.33 0.68 16.61 14.06 8.88 27.44 16.61"></polygon>
          </g>
          <polygon id="Path" fill="url(#linearGradient-4)" fill-rule="nonzero" points="286 18.52 36.01 162.85 286 307.19 536 162.85"></polygon>
          <polygon id="Path" fill="url(#linearGradient-5)" fill-rule="nonzero" points="36.01 162.85 36 332.65 286 477 286 307.19"></polygon>
          <polygon id="Path" fill="url(#linearGradient-6)" fill-rule="nonzero" points="536 162.85 286 307.19 286 477 536 332.66"></polygon>
          <g id="Group" transform="translate(79.000000, 43.000000)" stroke-linecap="round" stroke-width="1.72">
            <line x1="133.18" y1="41.87" x2="151.34" y2="31.39" id="Path" stroke="#FFEC6E"></line>
            <line x1="106.71" y1="57.15" x2="124.87" y2="46.67" id="Path" stroke="#F24C53"></line>
            <line x1="159.65" y1="26.59" x2="177.81" y2="16.11" id="Path" stroke="#00CA8E"></line>
            <line x1="186.12" y1="11.31" x2="204.28" y2="0.83" id="Path" stroke="#14C6CB"></line>
            <line x1="80.25" y1="72.43" x2="98.41" y2="61.95" id="Path" stroke="#E03875"></line>
            <line x1="0.84" y1="118.28" x2="19" y2="107.79" id="Path" stroke="#02A8EF"></line>
            <line x1="53.78" y1="87.72" x2="71.94" y2="77.23" id="Path" stroke="#9252DD"></line>
            <line x1="27.31" y1="103" x2="45.47" y2="92.51" id="Path" stroke="#1C7ADA"></line>
          </g>
          <polygon id="Top-2" fill="#000000" fill-rule="nonzero" opacity="0.4" points="180 103.45 286 42.25 392 103.45 286 164.65" className={classes.d001}></polygon>
          <g id="Top-1" transform="translate(172.000000, 0.000000)" className={classes.d002}>
            <polygon id="Path" fill="url(#linearGradient-7)" fill-rule="nonzero" points="0 66.01 114 0.19 228 66.01 114 131.83" className={classes.d003}></polygon>
          </g>
          <g id="Cloud-1" transform="translate(375.000000, 373.000000) rotate(-31.000000) translate(-375.000000, -373.000000) translate(348.000000, 356.000000)" fill-rule="nonzero">
            <path d="M34.2587964,9.35895663 L35.9047634,9.35895663 L40.5939608,5.68727639 L40.824577,4.12937927 C32.0995951,-1.9003907 18.7803755,-1.25067679 11.0796011,5.58105613 C8.93848732,7.47885807 7.38521896,9.73603855 6.539626,12.1791045 C7.06190401,12.0109224 7.64070561,11.9843673 8.18559305,12.1012096 L17.5617268,10.8902987 C17.5617268,10.8902987 18.0387859,10.2724508 18.2852288,10.3113983 C22.45667,6.72469424 29.4769003,6.30689456 34.2927105,9.35895663 L34.2587964,9.35895663 Z" id="Path" fill="#EA4335"></path>
            <path d="M47.2910156,12.1793453 C46.2110535,9.0707638 43.9967916,6.27569737 40.9153903,4.13777268 L34.3269423,9.29217274 C37.1094861,11.0705293 38.6943362,13.7504631 38.626414,16.561471 L38.626414,17.4772183 C41.8663003,17.4772183 44.4903592,19.5318933 44.4903592,22.0648115 C44.4903592,24.599501 41.8640363,26.6524047 38.626414,26.6524047 L26.8962596,26.6524047 L25.7257346,27.580551 L25.7257346,33.0838915 L26.8962596,33.9996389 L38.626414,33.9996389 C45.3507064,34.0403781 51.3165348,30.6306805 53.3134458,25.6073545 C55.3058287,20.5822573 52.8606315,15.1267411 47.2910156,12.1793453 L47.2910156,12.1793453 Z" id="Path" fill="#4285F4"></path>
            <path d="M15.162634,33.9608648 L26.8797863,33.9608648 L26.8797863,26.6061101 L15.162634,26.6061101 C14.3281177,26.6061101 13.5026476,26.4660026 12.7427628,26.1928817 L11.0963457,26.591922 L6.37420445,30.2701861 L5.96260018,31.5613029 C8.61088918,33.1290876 11.8426611,33.9715059 15.162634,33.9608648 L15.162634,33.9608648 Z" id="Path" fill="#34A853"></path>
            <path d="M15.1585747,10.1102181 C8.6447651,10.1403931 2.87558492,13.4045445 0.797865264,18.234355 C-1.27985439,23.0641655 0.791075331,28.3951994 5.95368812,31.5017222 L12.7549382,26.1795438 C9.80358042,25.1363614 8.49312325,22.4194823 9.82621353,20.1099579 C11.1593038,17.8004336 14.6312232,16.7749623 17.5825809,17.8181447 C18.8817215,18.2786327 19.9228447,19.0933422 20.5113056,20.1099579 L27.3125557,14.7877795 C24.4177807,11.8282587 19.9205814,10.0978866 15.1585747,10.1102181 L15.1585747,10.1102181 Z" id="Path" fill="#FBBC05"></path>
          </g>
          <text id="GuinsooLab" transform="translate(344.000000, 240.500000) rotate(-29.000000) translate(-344.000000, -240.500000) " font-family="Verdana-Bold, Verdana" font-size="24" font-weight="bold" fill="#FFFFFF">
            <tspan x="269" y="249">Guinsoo</tspan>
            <tspan x="378.054688" y="249" font-family="OriyaMN, Oriya MN" font-weight="normal">Lab</tspan>
          </text>
          <text id="G" transform="translate(154.500000, 155.500000) rotate(-29.000000) translate(-154.500000, -155.500000) " font-family="PermanentMarker-Regular, Permanent Marker" font-size="36" font-weight="normal" fill="#FFFFFF" className={classes.d004}>
            <tspan x="140.296875" y="170">G</tspan>
          </text>
        </g>
      </g>
    </svg>
  );
}