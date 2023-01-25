import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import axios from "axios";
import { Button, Popconfirm } from "antd";
import { Helmet } from "react-helmet";

const DetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const nav = useNavigate();

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      axios.delete(`http://localhost:3000/products/${data._id}`);
      setOpen(false);
      setConfirmLoading(false);
      nav("/");
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const getData = async () => {
    let response = await axios.get(`http://localhost:3000/products/${id}`);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="detail">
      <Helmet>
        <title>detailPage</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="card" key={data._id}>
        <div className="image">
          <img src={data?.cardImage} alt="" />
        </div>
        <div className="body">
          <Link>{data?.text}</Link>
          <p>{data?.text2}</p>
          <div className="user">
            <img src={data?.userImage} alt="" />
            <p>
              {data?.userName}, <span> Author</span>
            </p>
            <div className="price">
              <h2>${data?.price}</h2>
            </div>
          </div>
          <Popconfirm
            title="seriously???"
            description="Open Popconfirm with async logic"
            open={open}
            onConfirm={handleOk}
            okButtonProps={{
              loading: confirmLoading,
            }}
            onCancel={handleCancel}
          >
            <Button type="primary" onClick={showPopconfirm}>
              DELETE
            </Button>
          </Popconfirm>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
