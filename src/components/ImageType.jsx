import React, { Fragment } from "react";
import { Image } from "antd";
import normal from "../assets/img/Pokemon/normal.png";
import fighting from "../assets/img/Pokemon/fighting.png";
import flying from "../assets/img/Pokemon/flying.png";
import poison from "../assets/img/Pokemon/poison.png";
import ground from "../assets/img/Pokemon/ground.png";
import rock from "../assets/img/Pokemon/rock.png";
import bug from "../assets/img/Pokemon/bug.png";
import ghost from "../assets/img/Pokemon/ghost.png";
import steel from "../assets/img/Pokemon/steel.png";
import fire from "../assets/img/Pokemon/fire.png";
import water from "../assets/img/Pokemon/water.png";
import grass from "../assets/img/Pokemon/grass.png";
import electric from "../assets/img/Pokemon/electric.png";
import psychic from "../assets/img/Pokemon/psychic.png";
import ice from "../assets/img/Pokemon/ice.png";
import dragon from "../assets/img/Pokemon/dragon.png";
import dark from "../assets/img/Pokemon/dark.png";
import fairy from "../assets/img/Pokemon/fairy.png";
import shadow from "../assets/img/Pokemon/shadow.png";
import unknown from "../assets/img/Pokemon/unknown.png";

export const ImageType = ({ typeName }) => {
  
  let image = null;

  switch (typeName) {
    case "normal":
      image = normal;
      break;
    case "fighting":
      image = fighting;
      break;
    case "flying":
      image = flying;
      break;
    case "poison":
      image = poison;
      break;
    case "ground":
      image = ground;
      break;
    case "rock":
      image = rock;
      break;
    case "bug":
      image = bug;
      break;
    case "ghost":
      image = ghost;
      break;
    case "steel":
      image = steel;
      break;
    case "fire":
      image = fire;
      break;
    case "water":
      image = water;
      break;
    case "grass":
      image = grass;
      break;
    case "electric":
      image = electric;
      break;
    case "psychic":
      image = psychic;
      break;
    case "ice":
      image = ice;
      break;
    case "dragon":
      image = dragon;
      break;
    case "dark":
      image = dark;
      break;
    case "fairy":
      image = fairy;
      break;
    case "shadow":
      image = shadow;
      break;
    default:
      image = unknown;
      break;
  }

  return (
    <Fragment>
      <Image preview={false} src={image} />
    </Fragment>
  );
};
