import { PlayCircleOutlined } from "@ant-design/icons";
import { Button, DatePicker, DatePickerProps, Modal } from "antd";
import { useState } from "react";

export default function AntDesign() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="showcase-box">
      <Button>Normal</Button>

      <Button type="primary" onClick={showModal} className="flex items-center">
        <PlayCircleOutlined />
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          This is a pretty cool modal which comes nicely designed by Ant Design
        </p>
        <p>AntD has even more cool stuff. For example a date picker:</p>
        <DatePicker onChange={onChange} />
      </Modal>
    </div>
  );
}
