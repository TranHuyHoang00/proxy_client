import { Result, Button } from "antd";
import Link from "next/link";
export default function NotFoundUser() {
  return (
    <Result
      status="404"
      title="Không tìm thấy trang"
      subTitle="Rất tiếc, trang bạn truy cập không tồn tại. Vui lòng quay lại"
      extra={
        <Button size="large" type="primary">
          <Link href="/">Quay lại</Link>
        </Button>
      }
    />
  );
}
