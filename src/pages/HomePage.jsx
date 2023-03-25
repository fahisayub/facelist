import { Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getContactsApi } from "../store/contactReducer/contact.actions";
import { useDispatch, useSelector } from "react-redux";
import LoadingSkeketon from "../components/LoadingSkeketon";
import ContactCardComp from "../components/ContactCardComp";

const HomePage = () => {
  const dispatch = useDispatch();
  const [page, setpage] = useState(1);
  const { contacts } = useSelector((state) => state.contactReducer);
  const [loading, setLoading] = useState(false);

  const scrollHandler = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    console.log(Math.floor(scrollTop), scrollHeight, clientHeight);
    if (scrollHeight - Math.floor(scrollTop) === clientHeight) {
      setLoading(true);
      let newpage = page + 1;
      setpage(newpage);
      setTimeout(() => {
        dispatch(getContactsApi(newpage));
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    dispatch(getContactsApi(page));
  }, []);

  return (
    <Container
      mt="60px"
      maxW={"full"}
      overflowY={"auto"}
      h={"90vh"}
      onScroll={scrollHandler}
    >
      {contacts.map((contact, i) => {
        return <ContactCardComp key={contact.id.value} contact={contact} />;
      })}
      {loading && <LoadingSkeketon />}
    </Container>
  );
};

export default HomePage;
