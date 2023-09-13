import { useState } from "react";
import type { CustomNextPage } from "next";
import { Box, Grid, Image } from "@mantine/core";
import { PageContainer } from "components/PageContainer";
import { VerticalSplitContentCard } from "components/VerticalSplitContentCard";

const StaffDetail: CustomNextPage = () => {
  const staffThumbnailImages = [
    "https://images.unsplash.com/photo-1611042553365-9b101441c135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUUzJTgzJUEyJUUzJTgzJTg3JUUzJTgzJUFCJUUzJTgxJUFFJUU1JUE1JUIzJUUzJTgxJUFFJUU1JUFEJTkwfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1609505849320-29530bcb2d26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1596378232746-1dfcefb7bcf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=720&q=80"
  ];
  const [staffMainImageSrc, setStaffMainImageSrc] = useState(
    staffThumbnailImages[0]
  );
  const handleThumbnailClick = (src: string) => {
    setStaffMainImageSrc(src);
  };

  return (
    <PageContainer title="真由美" fluid>
      <Grid>
        <VerticalSplitContentCard title="スケジュール" xs={8}>
          <Box>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Box>
        </VerticalSplitContentCard>
        <VerticalSplitContentCard title="スタッフデータ" xs={4}>
          <Box sx={{ marginBottom: "16px" }}>
            <Image src={staffMainImageSrc} height={480} alt="Norway" />
          </Box>
          <Grid>
            {staffThumbnailImages.map((url, index) => (
              <Grid.Col span={4} key={index}>
                <Image
                  src={url}
                  height={160}
                  alt="Norway"
                  onClick={() => handleThumbnailClick(url)}
                  style={{ cursor: "pointer" }}
                />
              </Grid.Col>
            ))}
          </Grid>
        </VerticalSplitContentCard>
      </Grid>
    </PageContainer>
  );
};

export default StaffDetail;
