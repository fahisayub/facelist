import { Container } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import { getContactsApi } from "../store/contactReducer/contact.actions";
import { useDispatch, useSelector } from "react-redux";
import LoadingSkeketon from "../components/LoadingSkeketon";
import ContactCardComp, { ContactProp } from "../components/ContactCardComp";




const HomePage = () => {
  const dispatch:any = useDispatch();
  const [page, setpage] = useState<number>(1);
  const { contacts } = useSelector<unknown,any>((state:any) => state.contactReducer);
  const [loading, setLoading] = useState<boolean>(false);

  const scrollHandler = (e:any) => {
    //Get ScrollTop,ScrollHeight and ClientHeight from Syntetic event
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollHeight - Math.floor(scrollTop) === clientHeight) {
      setLoading(true);
      let newpage:number = page + 1;
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
      data-cy="contact-list"
    >
      {contacts.map((contact:ContactProp, i:number) => {
        return <ContactCardComp  contact={contact} />;
      })}
      {loading && <LoadingSkeketon />}
    </Container>
  );
};

export default HomePage;
