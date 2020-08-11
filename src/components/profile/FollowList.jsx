import { List, Avatar, Button } from "antd";
import { useObserver } from "mobx-react";
const strType = { following: "팔로잉", followers: "팔로워" };
const FollowList = ({ data }) => {
  return useObserver(() => {
    return (
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={<a href={`/${item.id}`}>{item.nickname}</a>}
            />
            <Button>{strType[item.type]}</Button>
          </List.Item>
        )}
      />
    );
  });
};

export default FollowList;
