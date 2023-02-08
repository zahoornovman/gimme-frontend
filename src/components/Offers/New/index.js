import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { Header2, TextButton } from "../../../styles/MasterStyles";
import { ContainernewOffer } from "./styles";
import { useSelector } from "react-redux";

function NewOffer() {
    const tags = useSelector((state) => state.tags.tags)
    return (
        <ContainernewOffer>
            <Header></Header>
            <div
                className="offerContentSection">
                <Header2
                    className="fontSize">What do like to give away?</Header2>
                <div className="inputField">
                    <label
                        className="fontSize"
                        htmlFor="title"
                    >
                        Title:
                    </label>
                    <input
                        className="fontSize"
                        id="title"></input>
                </div>
                <div className="inputField">
                    <label
                        className="fontSize"
                        htmlFor="description"
                    >
                        Description:
                    </label>
                    <input
                        className="fontSize"
                        id="description"></input>
                </div>
                <div className="inputField">
                    <label
                        className="fontSize"
                        htmlFor="condition"
                    >Condition:</label>

                    <select
                        id="condition">
                        <option
                            value="1"
                            className="fontSize">
                            New
                        </option>
                        <option
                            value="2"
                            className="fontSize">
                            Used like new
                        </option>
                        <option
                            value="3"
                            className="fontSize">
                            Used good
                        </option>
                        <option
                            value="4"
                            className="fontSize">
                            Used fair
                        </option>
                    </select>
                </div>
                <div className="inputField">
                    <label
                        className="fontSize"
                        htmlFor="request"
                    >
                        Requested:
                    </label>
                    <input
                        className="fontSize"
                        id="request"></input>
                </div>
                <div className="inputField">
                    <label
                        className="fontSize"
                        htmlFor="tags"
                    >Tag:</label>

                    <select
                        id="tags">
                        {
                            tags.map((tag, index) =>
                                <option
                                    key={index}
                                    id={index}
                                    className="fontSize"
                                    value={`${tag.title}`}
                                >
                                    {
                                        `${tag.title}`
                                    }
                                </option>
                            )
                        }
                    </select>
                </div>
                <div className="inputField">
                    <label
                        className="fontSize"
                        htmlFor="images"
                    >
                        Images(s):
                    </label>
                    <input
                        className="fontSize"
                        id="images"
                        type="file"
                        accept=".jpeg, .jpg, .png, .gif"
                        multiple></input>
                    <span className="fontSize">supported files: .jpeg, .jpg, .png, .gif</span>
                </div>
                <TextButton>Save</TextButton>
            </div>
            <FooterElement></FooterElement>
        </ContainernewOffer>
    );
}

export default NewOffer;