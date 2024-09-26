import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
  const navigate = useNavigate();
  const handleCLick = () => {
    navigate('/');
  };
  return (
    <Result
      status={404}
      title={'你好，您访问的页面不存在'}
      extra={[
        <Button type='default' key={'back'} onClick={handleCLick}>
          返回首页
        </Button>
      ]}
    />
  );
};
export default NotFound;
