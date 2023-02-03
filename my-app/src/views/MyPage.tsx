import { Typography, Box, Button, TextField } from "@mui/material";
import MapPage from "./MapPage";
import Header from "../components/Header";

export default function MyPage() {
  return (
    <>
      <Box alignItems="center" justifyContent="center" textAlign="center">
        <Typography variant="h5" component="div" p={4}>
          프로필 수정
        </Typography>
        <Box>
          <Box>
            <img src="../mainImg.png" />
          </Box>
          <Button variant="contained">프로필 사진 변경</Button>
        </Box>
        <Typography variant="h5" component="div" p={4}>
          회원 정보 수정
        </Typography>
        <Box>
          <Typography variant="h6" component="div">
            닉네임:
          </Typography>
          <TextField label="" id="fullWidth" />
          <Typography variant="h6" component="div">
            아이디:
          </Typography>
          <TextField label="" id="fullWidth" />
          <Typography variant="h6" component="div">
            비밀번호:
          </Typography>
          <TextField label="" id="fullWidth" />
        </Box>
        <Button variant="contained">프로필 수정하기</Button>
        <Button variant="contained">회원 탈퇴하기</Button>
      </Box>
    </>
  );
}
