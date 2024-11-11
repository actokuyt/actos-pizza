import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Image from "next/image";

interface PizzaCardProps {
  img: string;
  name: string;
  price: string;
  flexDirection: string;
  imgHeight: string;
}

export default function PizzaCard({
  img,
  name,
  price,
  flexDirection,
  imgHeight,
}: PizzaCardProps): React.JSX.Element {
  return (
    <Card sx={{ border: 0 }} className="card">
      <CardActionArea>
        <div className={`flex ${flexDirection}`}>
          {/* <CardMedia component="img" image={img} alt={name} height={imgHeight} width={"auto"}/> */}
          <Image src={img} alt={name} className={`${imgHeight} w-auto`} />
          <CardContent>
            <h1 className="text-xl font-semibold mb-4">{name}</h1>
            <p className="text-sm ">{price}</p>
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
}
