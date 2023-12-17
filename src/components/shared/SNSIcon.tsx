import Image from "next/image";
import React from "react";

interface SNSIconProps {
    sns: string;
    img_path_ok: string;
    img_path_err: string;
    img_alt: string;
}

const SNSIcon = ({ sns, img_path_ok, img_path_err, img_alt}: SNSIconProps) => {
    return (
        <div>
        {sns === "no_link" ? (
            <Image
            src={img_path_err}
            width={"30"}
            height={"30"}
            alt={"no_link"}
            ></Image>
        ) : (
            <a href={sns}>
                <Image
                src={img_path_ok}
                width={"30"}
                height={"30"}
                alt={img_alt}
                ></Image>
            </a>
        )}
        </div>
    );
};

export default SNSIcon;