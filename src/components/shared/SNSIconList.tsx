import { Interface } from "readline";
import SNSIcon from "./SNSIcon";
import { Comedian } from "@/models/Comedian";

interface SNSIconProps {
    comedian: Comedian,
}

export const SNSIconList = ({comedian}: SNSIconProps) => {
    return (
        <div className={`md:text-xl 
                        font-bold 
                        md:px-7 px-1 
                        py-3 
                        text-black`}
        >
            <ul className={`flex 
                            lg:space-x-3 space-x-1`}>
                <li>
                <SNSIcon
                    sns_link={comedian.x1 || "no_link"}
                    img_path_ok={"/icons/x_b.svg"}
                    img_path_err={"/icons/x_w.svg"}
                    img_alt={comedian.name + "_x1"}
                ></SNSIcon>
                </li>
                <li>
                <SNSIcon
                    sns_link={comedian.insta1 || "no_link"}
                    img_path_ok={"/icons/instagram_b.svg"}
                    img_path_err={"/icons/instagram_w.svg"}
                    img_alt={comedian.name + "_insta1"}
                ></SNSIcon>
                </li>
                <li>
                <SNSIcon
                    sns_link={comedian.x2 || "no_link"}
                    img_path_ok={"/icons/x_b.svg"}
                    img_path_err={"/icons/x_w.svg"}
                    img_alt={comedian.name + "_x2"}
                ></SNSIcon>
                </li>
                <li>
                <SNSIcon
                    sns_link={comedian.insta2 || "no_link"}
                    img_path_ok={"/icons/instagram_b.svg"}
                    img_path_err={"/icons/instagram_w.svg"}
                    img_alt={comedian.name + "_insta2"}
                ></SNSIcon>
                </li>
                <li>
                <SNSIcon
                    sns_link={comedian.youtube_channel || "no_link"}
                    img_path_ok={"/icons/youtube_b.svg"}
                    img_path_err={"/icons/youtube_w.svg"}
                    img_alt={comedian.name + "_youtube"}
                ></SNSIcon>
                </li>
            </ul>
        </div>
    );
};