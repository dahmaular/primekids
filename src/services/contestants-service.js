import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

import { baseUrl } from "../Components/Constant/ServerDetails";

export const ContestantContext = createContext();

export const ContestantContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [contestant, setContestant] = useState([]);
  const [leaders, setLeaders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [voteId, setVoteId] = useState();
  const [settings, setSettings] = useState([]);

  const registerContestant = async (details) => {
    setIsLoading(true);
    try {
      await axios({
        method: "post",
        url: `${baseUrl}api/users`,
        data: details,
      }).then((response) => {
        // console.log("Response", response);
        if (response.status === 200) {
          try {
            axios({
              method: "post",
              url: `${baseUrl}api/initialize`,
              data: {
                userId: response.data.data._id,
              },
            }).then((res) => {
              // console.log("Initialize votes res", res);
              setVoteId(res.data._id);
              setIsLoading(false);
              setShow(true);
            });
          } catch (error) {
            console.log("Initializing vote error", error);
            setIsLoading(false);
          }
        }
      });
    } catch (error) {
      // console.log("fetching data error", error);
      setIsLoading(false);
    }
  };

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      await axios({
        method: "get",
        url: `${baseUrl}api/votes`,
        headers: { "Content-Type": "application/json" },
      }).then((users) => {
        setUser(users.data);
        // console.log(users);
        setIsLoading(false);
      });
    } catch (error) {
      console.log("fetching data error", error);
    }
  };

  const fetchStage2 = async () => {
    setIsLoading(true);
    try {
      await axios({
        method: "get",
        url: `${baseUrl}api/stage2`,
        headers: { "Content-Type": "application/json" },
      }).then((users) => {
        setUser(users.data);
        // console.log(users);
        setIsLoading(false);
      });
    } catch (error) {
      console.log("fetching data error", error);
    }
  };

  const fetchStage3 = async () => {
    setIsLoading(true);
    try {
      await axios({
        method: "get",
        url: `${baseUrl}api/stage3`,
        headers: { "Content-Type": "application/json" },
      }).then((users) => {
        setUser(users.data);
        // console.log(users);
        setIsLoading(false);
      });
    } catch (error) {
      console.log("fetching data error", error);
    }
  };

  const fetchLeadingVotes = async () => {
    setIsLoading(true);
    try {
      await axios({
        method: "get",
        url: `${baseUrl}api/leadVotes`,
        headers: { "Content-Type": "application/json" },
      }).then((users) => {
        setLeaders(users.data);
        // console.log(users);
        setIsLoading(false);
      });
    } catch (error) {
      console.log("fetching data error", error);
    }
  };

  const fetchLeadingVotesStage2 = async () => {
    setIsLoading(true);
    try {
      await axios({
        method: "get",
        url: `${baseUrl}api/leadVotes2`,
        headers: { "Content-Type": "application/json" },
      }).then((users) => {
        setLeaders(users.data);
        // console.log(users);
        setIsLoading(false);
      });
    } catch (error) {
      console.log("fetching data error", error);
    }
  };

  const fetchLeadingVotesStage3 = async () => {
    setIsLoading(true);
    try {
      await axios({
        method: "get",
        url: `${baseUrl}api/leadVotes3`,
        headers: { "Content-Type": "application/json" },
      }).then((users) => {
        setLeaders(users.data);
        // console.log(users);
        setIsLoading(false);
      });
    } catch (error) {
      console.log("fetching data error", error);
    }
  };

  const fetchContestant = async (id) => {
    // setIsLoading(true);
    try {
      await axios({
        method: "get",
        url: `${baseUrl}api/votes/${id}`,
        headers: { "Content-Type": "application/json" },
      }).then((u) => {
        setContestant(u.data);
        // console.log(u.data);
      });
    } catch (error) {
      console.log("fetching data error", error);
    }
  };

  const fetchContestantStage2 = async (id) => {
    // setIsLoading(true);
    try {
      await axios({
        method: "get",
        url: `${baseUrl}api/stage2/${id}`,
        headers: { "Content-Type": "application/json" },
      }).then((u) => {
        setContestant(u.data);
        // console.log(user);
      });
    } catch (error) {
      console.log("fetching data error", error);
    }
  };

  const fetchContestantStage3 = async (id) => {
    // setIsLoading(true);
    try {
      await axios({
        method: "get",
        url: `${baseUrl}api/stage3/${id}`,
        headers: { "Content-Type": "application/json" },
      }).then((u) => {
        setContestant(u.data);
        // console.log(user);
      });
    } catch (error) {
      console.log("fetching data error", error);
    }
  };

  const voteContestant = async (vId, id, data) => {
    try {
      await axios({
        method: "put",
        url: `${baseUrl}api/votes/${vId}`,
        data: data,
        headers: { "Content-Type": "application/json" },
      }).then((response) => {
        if (response.status === 200) fetchContestant(id);
        // console.log(response);
      });
    } catch (error) {
      console.log("fetching data error", error);
    }
  };

  const voteContestantStage2 = async (vId, id, data) => {
    try {
      await axios({
        method: "put",
        url: `${baseUrl}api/stage2/${id}`,
        data: data,
        headers: { "Content-Type": "application/json" },
      }).then((response) => {
        if (response.status === 200) {
          // console.log("Vote contestnat stage2", response);
          fetchContestantStage2(id);
        }
      });
    } catch (error) {
      console.log("fetching data error", error);
    }
  };

  const voteContestantStage3 = async (vId, id, data) => {
    try {
      await axios({
        method: "put",
        url: `${baseUrl}api/stage3/${id}`,
        data: data,
        headers: { "Content-Type": "application/json" },
      }).then((response) => {
        if (response.status === 200) {
          // console.log("Vote contestnat stage2", response);
          fetchContestantStage3(id);
        }
      });
    } catch (error) {
      console.log("fetching data error", error);
    }
  };

  const savePayment = async (data) => {
    try {
      await axios({
        method: "post",
        url: `${baseUrl}api/payment`,
        data: data,
        headers: { "Content-Type": "application/json" },
      }).then((response) => {
        if (response.status === 200) 
        console.log("Payment response");
        // console.log(response);
      });
    } catch (error) {
      console.log("fetching data error", error);
    }
  };

  const getSettings = async () => {
    try {
      await axios({
        method: "get",
        url: `${baseUrl}api/settings`,
        headers: { "Content-Type": "application/json"},
      }).then((resp) => {
        if (resp.status == 200){
          console.log(resp.data);
          setSettings(resp.data);
        }
      });
    } catch (error) {
      console.log("fetching data error", error)
    }
  };

  useEffect(() => {
    getSettings();
  },[])

  return (
    <ContestantContext.Provider
      value={{
        user,
        setUser,
        fetchUsers,
        fetchStage2,
        fetchStage3,
        isLoading,
        setIsLoading,
        fetchLeadingVotes,
        fetchLeadingVotesStage2,
        fetchLeadingVotesStage3,
        leaders,
        registerContestant,
        show,
        setShow,
        fetchContestant,
        fetchContestantStage2,
        fetchContestantStage3,
        contestant,
        voteContestant,
        voteContestantStage2,
        voteContestantStage3,
        savePayment,
        voteId,
        settings,
        getSettings
      }}
    >
      {children}
    </ContestantContext.Provider>
  );
};
