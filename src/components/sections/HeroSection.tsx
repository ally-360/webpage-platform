"use client";

import React, { memo, useMemo } from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { FreeTrialButton } from "@/components/common";
import { brandGradients, shadows } from "../../config/theme-config";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeroSection = memo(() => {
  const backgroundStyles = useMemo(
    () => ({
      position: "absolute" as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `
      radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.04) 0%, transparent 50%)
    `,
    }),
    []
  );

  const mainContainerStyles = useMemo(
    () => ({
      position: "relative" as const,
      minHeight: "calc(100vh - 200px)",
      display: "flex",
      alignItems: "center",
      background: brandGradients.subtle.blue,
      color: "#333333",
      overflow: "hidden",
      pt: { xs: 9, md: 4 },
    }),
    []
  );

  return (
    <Box component="main" sx={mainContainerStyles}>
      {/* Background decoration */}
      <Box sx={backgroundStyles} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            alignItems: "center",
            minHeight: "80vh",
            animation: "fadeInUp 0.8s ease-out",
            "@keyframes fadeInUp": {
              "0%": {
                opacity: 0,
                transform: "translateY(30px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          {/* Left Column - Content */}
          <Box sx={{ pr: { md: 4 } }}>
            {/* Badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                px: 3,
                py: 1,
                borderRadius: "50px",
                backgroundColor: "rgba(0, 176, 240, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0, 176, 240, 0.2)",
                mb: 3,
                animation: "slideInLeft 0.6s ease-out 0.2s both",
                "@keyframes slideInLeft": {
                  "0%": {
                    opacity: 0,
                    transform: "translateX(-50px)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translateX(0)",
                  },
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: 600, fontSize: "0.875rem" }}
              >
                🚀 ERP 100% colombiano para PYMEs
              </Typography>
            </Box>

            {/* Main Heading */}
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                fontWeight: 800,
                lineHeight: { xs: 1.2, md: 1.1 },
                mb: 3,
                background: "linear-gradient(135deg, #333333 0%, #555555 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "slideInUp 0.8s ease-out 0.4s both",
                "@keyframes slideInUp": {
                  "0%": {
                    opacity: 0,
                    transform: "translateY(50px)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
              }}
            >
              Gestiona tu empresa{" "}
              <Box
                component="span"
                sx={{
                  background: brandGradients.primary,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                como nunca antes
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.125rem", md: "1.375rem" },
                fontWeight: 400,
                lineHeight: 1.6,
                mb: 4,
                color: "rgba(51, 51, 51, 0.8)",
                maxWidth: "540px",
                animation: "fadeIn 1s ease-out 0.6s both",
                "@keyframes fadeIn": {
                  "0%": {
                    opacity: 0,
                  },
                  "100%": {
                    opacity: 1,
                  },
                },
              }}
            >
              La plataforma ERP más completa y fácil de usar, diseñada
              específicamente para pequeñas y medianas empresas colombianas.
            </Typography>

            {/* CTA Buttons */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{
                mb: 4,
                animation: 'slideInUp 1s ease-out 0.8s both',
              }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  paddingRight: 2.5,
                  paddingLeft: 2.5,
                  backgroundColor: "#004C97",
                  color: "#FFFFFF",
                  borderRadius: 2,
                  boxShadow: shadows.hero,
                  "&:hover": {
                    backgroundColor: "#003d7a",
                    boxShadow: shadows.hero,
                  },
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                Probar gratis 30 días
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayCircleOutlineIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  borderColor: "#004C97",
                  paddingRight: 2.5,
                  paddingLeft: 2.5,
                  color: "#004C97",
                  borderRadius: 2,
                  "&:hover": {
                    borderColor: "#003d7a",
                    backgroundColor: "rgba(0, 76, 151, 0.1)",
                    transform: "translateY(-1px)",
                  },
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                Solicitar una demo
              </Button>
            </Stack>

            {/* Trust indicators */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
                animation: "fadeIn 1.2s ease-out 1s both",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "rgba(51, 51, 51, 0.6)", fontWeight: 500 }}
              >
                ✓ Sin costos ocultos
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(51, 51, 51, 0.6)", fontWeight: 500 }}
              >
                ✓ Soporte 24/7
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(51, 51, 51, 0.6)", fontWeight: 500 }}
              >
                ✓ Implementación gratuita
              </Typography>
            </Box>

          </Box>

          {/* Right Column - Illustration */}
          <Box>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: { xs: 300, sm: 400, md: 500 },
                }}
              >
                {/* Background pattern */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: "url('/logo/Macbook_Pro_ally_login.svg')",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                {/* Floating elements for visual interest */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ position: "absolute", top: "15%", right: "15%" }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: "rgba(0, 176, 240, 0.2)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <Typography sx={{ fontSize: "1.5rem" }}>💰</Typography>
                  </Box>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    top: "10%",
                    left: "10%",
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      backgroundColor: "rgba(0, 76, 151, 0.15)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <Typography sx={{ fontSize: "1.2rem" }}>📈</Typography>
                  </Box>
                </motion.div>
              </Box>
            </motion.div>
          </Box>
        </Box>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Box
              sx={{
                width: 24,
                height: 40,
                border: "2px solid rgba(0, 76, 151, 0.4)",
                borderRadius: "12px",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: 4,
                  height: 8,
                  backgroundColor: "rgba(0, 76, 151, 0.6)",
                  borderRadius: "2px",
                  top: 6,
                  left: "50%",
                  transform: "translateX(-50%)",
                },
              }}
            />
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
