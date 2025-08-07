"use client";

import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { brandGradients, shadows } from '../../config/theme-config';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HeroSection() {
  return (
    <Box
      component="main"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: brandGradients.subtle.blue,
        color: "#333333",
        overflow: "hidden",
        pt: { xs: 9, md: 11 }, // Account for header height
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.04) 0%, transparent 50%)
          `,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 4,
              alignItems: "center",
              minHeight: "80vh",
            }}
          >
            {/* Left Column - Content */}
            <Box sx={{ pr: { md: 4 } }}>
              {/* Badge */}
              <motion.div variants={fadeInUp}>
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
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 600, fontSize: "0.875rem" }}
                  >
                    🚀 ERP 100% colombiano para PYMEs
                  </Typography>
                </Box>
              </motion.div>

              {/* Main Heading */}
              <motion.div variants={fadeInUp}>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: {
                      xs: "2.25rem",
                      sm: "2.75rem",
                      md: "3.5rem",
                      lg: "4rem",
                    },
                    fontWeight: 700,
                    lineHeight: 1.1,
                    mb: 3,
                    color: "#004C97",
                  }}
                >
                  Tu empresa a la mano
                </Typography>
              </motion.div>

              {/* Subtitle */}
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1.1rem", sm: "1.25rem" },
                    fontWeight: 400,
                    lineHeight: 1.6,
                    mb: 4,
                    color: "#333333",
                    maxWidth: { md: 480 },
                  }}
                >
                  El ERP colombiano que simplifica la facturación, inventario y
                  ventas para tu negocio.
                </Typography>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={fadeInUp}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ mb: 4 }}
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
                        transform: "translateY(-2px)",
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
              </motion.div>

              {/* Trust indicators */}
              <motion.div variants={fadeInUp}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(0, 76, 151, 0.7)",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                    }}
                  >
                    ✅ Sin permanencia • ✅ Soporte 24/7 • ✅ Datos seguros en
                    Colombia
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "rgba(0, 76, 151, 0.6)",
                      fontSize: "0.8rem",
                    }}
                  >
                    Más de 5,000 empresas ya confían en Ally360
                  </Typography>
                </Box>
              </motion.div>
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
                  {/* Illustration placeholder with modern design */}
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: 480,
                      height: "100%",
                      background:
                        brandGradients.card,
                      borderRadius: 4,
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(0, 176, 240, 0.2)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
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
                        backgroundImage: `
                          radial-gradient(circle at 30% 20%, rgba(0, 176, 240, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 70% 80%, rgba(0, 76, 151, 0.08) 0%, transparent 50%)
                        `,
                      }}
                    />

                    {/* Dashboard mockup elements */}
                    <Box
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        textAlign: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          backgroundColor: "#004C97",
                          borderRadius: "20px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 3,
                          mx: "auto",
                          boxShadow: shadows.hero,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "2rem",
                            fontWeight: "bold",
                            color: "#FFFFFF",
                          }}
                        >
                          📊
                        </Typography>
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{ color: "#004C97", mb: 2, fontWeight: 600 }}
                      >
                        Dashboard Inteligente
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#333333", maxWidth: 280, mx: "auto" }}
                      >
                        Visualiza el estado de tu negocio en tiempo real con
                        gráficos y métricas clave
                      </Typography>
                    </Box>

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
                        bottom: "20%",
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
                </Box>
              </motion.div>
            </Box>
          </Box>
        </motion.div>

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
}
