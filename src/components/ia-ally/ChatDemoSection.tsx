'use client';

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  Button,
  Stack,
  Avatar,
  Paper,
  IconButton,
  Fade,
  Box,
} from '@mui/material';
import {
  SmartToy as BotIcon,
  Lightbulb as InsightIcon,
  Send as SendIcon,
  Mic as MicIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { CHAT_SCENARIOS, CHAT_DEMO_CONTENT, ANIMATIONS, GRADIENTS } from '../../constants/ia-ally';

interface ChatDemoSectionProps {
  onCTAClick?: () => void;
}

const ChatDemoSection: React.FC<ChatDemoSectionProps> = ({
  onCTAClick,
}) => {
  const [activeChat, setActiveChat] = useState(0);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        variants={ANIMATIONS.staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div variants={ANIMATIONS.fadeInUp}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 2,
              color: '#333',
              textAlign: 'center',
            }}
          >
            {CHAT_DEMO_CONTENT.title}{' '}
            <Box 
              component="span" 
              sx={{ 
                background: GRADIENTS.text,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {CHAT_DEMO_CONTENT.titleHighlight}
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: '1.2rem',
              color: '#666',
              textAlign: 'center',
              mb: 6,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            {CHAT_DEMO_CONTENT.subtitle}
          </Typography>
        </motion.div>

        {/* Category Tabs */}
        <motion.div variants={ANIMATIONS.fadeInUp}>
          <Box sx={{ mb: 4 }}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
              {CHAT_SCENARIOS.map((scenario, index) => (
                <Button
                  key={index}
                  variant={activeChat === index ? "contained" : "outlined"}
                  onClick={() => setActiveChat(index)}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    fontWeight: 600,
                    ...(activeChat === index ? {
                      background: `linear-gradient(135deg, ${scenario.color} 0%, #004C97 100%)`,
                      color: '#fff',
                      boxShadow: `0 4px 15px ${scenario.color}40`,
                    } : {
                      borderColor: scenario.color,
                      color: scenario.color,
                      '&:hover': {
                        backgroundColor: `${scenario.color}10`,
                      }
                    })
                  }}
                >
                  {scenario.category}
                </Button>
              ))}
            </Stack>
          </Box>
        </motion.div>

        {/* Chat Interface */}
        <motion.div variants={ANIMATIONS.fadeInUp}>
          <Fade in={true} key={activeChat}>
            <Card
              sx={{
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                border: `2px solid ${CHAT_SCENARIOS[activeChat].color}20`,
              }}
            >
              {/* Chat Header */}
              <Box
                sx={{
                  background: `linear-gradient(135deg, ${CHAT_SCENARIOS[activeChat].color} 0%, #004C97 100%)`,
                  color: '#fff',
                  p: 3,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Avatar
                    sx={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      mr: 2,
                      width: 40,
                      height: 40,
                    }}
                  >
                    <BotIcon />
                  </Avatar>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {CHAT_DEMO_CONTENT.chatHeader.title} - {CHAT_SCENARIOS[activeChat].category}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {CHAT_DEMO_CONTENT.chatHeader.subtitle}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      ml: 2,
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: '#4CAF50',
                      animation: 'pulse 2s infinite',
                      '@keyframes pulse': {
                        '0%': { opacity: 1 },
                        '50%': { opacity: 0.5 },
                        '100%': { opacity: 1 },
                      },
                    }}
                  />
                </Box>
              </Box>

              {/* Chat Messages */}
              <Box sx={{ p: 4, maxHeight: 600, overflowY: 'auto' }}>
                {CHAT_SCENARIOS[activeChat].conversations.map((conversation, index) => (
                  <Box key={index} sx={{ mb: 6 }}>
                    {/* User Question */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
                      <Paper
                        elevation={2}
                        sx={{
                          background: `linear-gradient(135deg, ${CHAT_SCENARIOS[activeChat].color} 0%, #004C97 100%)`,
                          color: '#fff',
                          px: 3,
                          py: 2,
                          borderRadius: '20px 20px 5px 20px',
                          maxWidth: '70%',
                          position: 'relative',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            right: -8,
                            bottom: 0,
                            width: 0,
                            height: 0,
                            borderLeft: '8px solid transparent',
                            borderTop: `8px solid ${CHAT_SCENARIOS[activeChat].color}`,
                          }
                        }}
                      >
                        <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.5 }}>
                          {conversation.question}
                        </Typography>
                      </Paper>
                    </Box>

                    {/* AI Answer */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', maxWidth: '85%' }}>
                        <Avatar
                          sx={{
                            background: `linear-gradient(135deg, ${CHAT_SCENARIOS[activeChat].color} 0%, #004C97 100%)`,
                            width: 40,
                            height: 40,
                            mr: 2,
                            mt: 0.5,
                            flexShrink: 0,
                          }}
                        >
                          <BotIcon />
                        </Avatar>
                        <Paper
                          elevation={1}
                          sx={{
                            background: '#fff',
                            px: 3,
                            py: 2,
                            borderRadius: '20px 20px 20px 5px',
                            border: '1px solid #e0e0e0',
                            position: 'relative',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              left: -8,
                              bottom: 0,
                              width: 0,
                              height: 0,
                              borderRight: '8px solid #fff',
                              borderTop: '8px solid #fff',
                              borderLeft: '8px solid transparent',
                              borderBottom: '8px solid transparent',
                            }
                          }}
                        >
                          <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.6, color: '#333', mb: 2 }}>
                            {conversation.answer}
                          </Typography>
                          
                          {/* Insight Card */}
                          <Card
                            sx={{
                              background: `linear-gradient(135deg, ${CHAT_SCENARIOS[activeChat].color}10 0%, ${CHAT_SCENARIOS[activeChat].color}05 100%)`,
                              border: `1px solid ${CHAT_SCENARIOS[activeChat].color}30`,
                              borderRadius: 2,
                              p: 2,
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <InsightIcon sx={{ color: CHAT_SCENARIOS[activeChat].color, mr: 1, fontSize: '1.2rem' }} />
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: CHAT_SCENARIOS[activeChat].color }}>
                                Recomendación inteligente
                              </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ color: '#555', fontSize: '0.95rem' }}>
                              {conversation.insights}
                            </Typography>
                          </Card>
                        </Paper>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* Chat Input (Demo) */}
              <Box
                sx={{
                  p: 3,
                  borderTop: '1px solid #e0e0e0',
                  background: '#fff',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    background: '#f8f9fa',
                    borderRadius: 3,
                    px: 3,
                    py: 2,
                    border: '2px solid #e9ecef',
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      flex: 1,
                      color: '#aaa',
                      fontSize: '1rem',
                    }}
                  >
                    {CHAT_DEMO_CONTENT.inputPlaceholder}
                  </Typography>
                  <IconButton sx={{ color: '#666', mr: 1 }}>
                    <MicIcon />
                  </IconButton>
                  <IconButton 
                    sx={{ 
                      color: '#fff',
                      background: `linear-gradient(135deg, ${CHAT_SCENARIOS[activeChat].color} 0%, #004C97 100%)`,
                      '&:hover': {
                        background: `linear-gradient(135deg, ${CHAT_SCENARIOS[activeChat].color} 0%, #003d7a 100%)`,
                      }
                    }}
                  >
                    <SendIcon />
                  </IconButton>
                </Box>
              </Box>
            </Card>
          </Fade>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default ChatDemoSection;
