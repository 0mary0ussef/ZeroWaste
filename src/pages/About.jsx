import { Box, Container, Typography, Grid, Paper, Avatar } from "@mui/material";
import RecyclingIcon from "@mui/icons-material/Recycling";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Emma Johnson",
      role: "Founder & CEO",
      bio: "Environmental scientist with 10+ years of experience in waste management and sustainability initiatives.",
      image: "/images/team-member-1.jpg",
    },
    {
      id: 2,
      name: "David Chen",
      role: "CTO",
      bio: "Tech innovator with a passion for creating digital solutions to environmental challenges.",
      image: "/images/team-member-2.jpg",
    },
    {
      id: 3,
      name: "Sarah Williams",
      role: "Head of Operations",
      bio: "Operations expert focused on creating efficient and sustainable business processes.",
      image: "/images/team-member-3.jpg",
    },
    {
      id: 4,
      name: "Michael Rodriguez",
      role: "Community Manager",
      bio: "Community builder dedicated to fostering connections between eco-conscious individuals.",
      image: "/images/team-member-4.jpg",
    },
    {
      id: 5,
      name: "Olivia Thompson",
      role: "Sustainability Director",
      bio: "Environmental policy specialist working to implement best practices in sustainability.",
      image: "/images/team-member-5.jpg",
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box sx={{ bgcolor: "primary.main", color: "white", py: 8 }}>
        <Container>
          <Typography
            variant="h3"
            component="h1"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            About Zero Waste
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ maxWidth: 800, mx: "auto" }}
          >
            We're on a mission to create a world where waste is minimized and
            resources are valued.
          </Typography>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Container sx={{ py: 8 }}>
        <SectionTitle>Our Story</SectionTitle>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1" paragraph>
                Zero Waste began in 2020 when a group of environmental
                enthusiasts recognized the urgent need to address the growing
                waste crisis. What started as a small community initiative has
                grown into a comprehensive platform connecting eco-conscious
                individuals and businesses.
              </Typography>
              <Typography variant="body1" paragraph>
                Our platform facilitates the exchange of second-hand items,
                provides educational resources on recycling, and builds a
                community of like-minded individuals committed to sustainable
                living.
              </Typography>
              <Typography variant="body1">
                Today, Zero Waste serves thousands of users across the country,
                helping divert tons of waste from landfills and promoting a
                circular economy where items are reused, repurposed, and
                recycled.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/placeholder.svg?height=400&width=600"
              alt="Zero Waste team working together"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Our Mission Section */}
      <Box sx={{ bgcolor: "grey.100", py: 8 }}>
        <Container>
          <SectionTitle>Our Mission</SectionTitle>
          <Paper elevation={0} sx={{ p: 4, borderRadius: 2, bgcolor: "white" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: 4,
              }}
            >
              <Avatar
                sx={{ bgcolor: "primary.main", width: 80, height: 80, mb: 2 }}
              >
                <RecyclingIcon sx={{ fontSize: 40 }} />
              </Avatar>
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Creating a Zero Waste Future
              </Typography>
            </Box>
            <Typography
              variant="body1"
              paragraph
              align="center"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Our mission is to empower individuals and communities to reduce
              waste through education, technology, and community engagement. We
              believe that small actions, when multiplied by millions, can
              transform our relationship with waste and create a more
              sustainable future.
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              By 2030, we aim to help divert 1 million tons of waste from
              landfills and inspire 10 million people to adopt more sustainable
              consumption habits.
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Team Section */}
      <Container sx={{ py: 8 }}>
        <SectionTitle>Our Team</SectionTitle>
        <Grid container spacing={4}>
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={member.id}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: "center",
                  height: "100%",
                  borderRadius: 2,
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-10px)" },
                }}
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
                />
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {member.role}
                </Typography>
                <Typography variant="body2">{member.bio}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
