//import Image from 'next/image'
import React from "react";
import Link from 'next/link';
import parse from 'html-react-parser';

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

    constructor(props) {
        super(props)

        this.slug = parse(props.attributes.slug);
        this.title = parse(props.attributes.title);
        this.item = Object.entries(props.attributes.item).forEach(([key, value]) => {
            parse(value+"");
        });
    }



    render() {
   
        return (
            <Link href={"veille/"+this?.slug} passHref={true}><a>
                <div id={this?.slug} className="article" >
                    <h3>{this?.title}</h3>
                    {this.item?.category && (
                        <h3>{this.item.category}</h3>
                    )}
                    {/* 
                    <span className="autor">{this.item?.autor}</span>

                    <Image
                        src={this.item?.image}
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


