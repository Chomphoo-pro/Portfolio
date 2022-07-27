import Image from 'next/image'
import React from "react";
import ReactDOM from 'react-dom';
import Link from 'next/link';

/*
export default function Articles({ id, title, autor, image, date }) {
    function details(){
        console.log("details: "+id);
    }

    return (
        <div className="article" onClick={details}>
            <h3>{title}</h3>

            <span className="autor">écrit par {autor}</span>

            <Image
                src={image}
                alt="Picture of the author"
                width={500}
                height={500}
            />
        </div>
    )
}
*/


class Article extends React.Component {
    __atr = "";
    constructor(props) {
        super(props)
        this.__atr=props.attributes
    }



    render() {
   
        return (
            <Link href={"how-to/"+this.__atr.slug} passHref={true}><a>
                <div id={this.__atr.slug} className="article" >
                    <h3>{this.__atr.title}</h3>
                    {this.__atr?.category && (
                        <h3>{this.__atr.category}</h3>
                    )}
                    {/* 
                    <span className="autor">{this.__atr.autor}</span>

                    <Image
                        src={this.__atr.image}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    /> */}
                </div>
            </a></Link>
        );

    }
}

export default Article


