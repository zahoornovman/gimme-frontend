import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchingTags } from "../features/tags/tagsSlice";
import { baseUrl } from "../baseurl";
import { selectTags } from "../store/selectors/selectors";

export const useSettingTags = () => {
  const dispatch = useDispatch();
  const tag = useSelector(selectTags);

  useEffect(() => {
    if (tag === "notFetched") {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(`${baseUrl}/backend/api/tags/`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          dispatch(
            fetchingTags({
              tags: result,
            })          
          );
        })
        .catch((error) => console.log("error", error));
    }
  }, []);
};
