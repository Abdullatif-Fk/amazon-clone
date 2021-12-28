import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Order from "../../components/Order/Order";
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";

import { useStateValue } from "../../StateProvider";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    if (user) {
      onSnapshot(
        query(
          collection(db, "users", `${user?.uid}`, "orders"),
          orderBy("created", "desc")
        ),
        (doc) => {
          setDocs(doc.docs);
          docs?.map((item) => {
            orders.push({ userId: user?.uid, id: item.id, data: item.data() });
          });
        }
      );
    } else {
      setOrders([]);
    }

    console.log(orders);
    // const docSnap = await getDoc(docRef);
    // console.log(docSnap.data());
    // const q = query(docRef, orderBy("created", "desc"));
    // console.log(q);
  }, []);
  return (
    <>
      <Header />
      <div className="orders">
        <h1>Your orders</h1>
        <div className="orders__order">
          {orders?.map((order, key) => (
            <Order key={key} order={order} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Orders;
