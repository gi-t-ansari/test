/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { extractErrorMessage } from "../../../../config";
import { userSelector } from "../../../redux/slices/userSlice";

export function useApiCall() {
  const dispatch = useDispatch();
  const { token } = useSelector(userSelector);
  // console.log(token);

  const callApi = (
    sagaAction,
    dataOrParams = {},
    callbackSuccess,
    callbackError,
    tokenRequired = false
  ) => {
    let paramsData = dataOrParams;

    if (tokenRequired) {
      paramsData = {
        ...paramsData,
        token,
      };
    }

    dispatch({
      type: sagaAction,
      payload: paramsData,
      callbackSuccess: (data) => {
        let message =
          data && data.message
            ? data.message
            : "Request processed successfully";
        let resp = data && data.data ? data.data : null;
        // hideLoader()
        callbackSuccess && callbackSuccess(message, resp);
      },
      callbackError: (error) => {
        let message = error?.message
          ? error?.message
          : extractErrorMessage(
              error,
              "Unable to process request, please try again"
            );
        let resp = error && error.data ? error.data : error;
        // hideLoader()
        // console.log(message);
        callbackError && callbackError(message, resp);
      },
    });
    // console.log("dispatch loader");
  };
  return callApi;
}
