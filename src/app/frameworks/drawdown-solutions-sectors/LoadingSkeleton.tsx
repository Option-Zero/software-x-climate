import { Card, CardContent, Container, Skeleton, Stack, Typography } from '@mui/material';
import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
});

export default function LoadingSkeleton() {
    return (
        <Container maxWidth="xl">
            {/* Page title */}
            <Typography variant="h1" sx={{ mb: 2, fontFamily: bebas.style.fontFamily }}>
                Drawdown Solutions Sectors
            </Typography>
            <Skeleton variant="text" width="60%" height={40} sx={{ mb: 2 }} />

            <Stack direction="column" spacing={2} sx={{ width: '100%' }}>
                {/* Category skeletons */}
                {[1, 2, 3].map((category) => (
                    <Container key={category} maxWidth="xl">
                        <Skeleton variant="text" width={200} height={50} sx={{ mb: 2 }} />
                        <Stack direction="column" spacing={2} sx={{ width: '100%' }}>
                            {/* Sector skeletons */}
                            {[1, 2].map((sector) => (
                                <Card key={sector} elevation={2}>
                                    <CardContent>
                                        <Skeleton
                                            variant="text"
                                            width={150}
                                            height={40}
                                            sx={{ mb: 2 }}
                                        />
                                        <Container maxWidth="md">
                                            <Stack
                                                direction="column"
                                                spacing={2}
                                                sx={{ width: '100%' }}
                                            >
                                                {/* Subgroup skeletons */}
                                                {[1, 2, 3].map((subgroup) => (
                                                    <Card key={subgroup} elevation={1}>
                                                        <CardContent>
                                                            <Skeleton
                                                                variant="text"
                                                                width={120}
                                                                height={30}
                                                                sx={{ mb: 1 }}
                                                            />
                                                            <Stack
                                                                direction="row"
                                                                spacing={2}
                                                                sx={{ flexWrap: 'wrap' }}
                                                            >
                                                                {[1, 2, 3, 4].map((logo) => (
                                                                    <Skeleton
                                                                        key={logo}
                                                                        variant="rectangular"
                                                                        width={80}
                                                                        height={60}
                                                                        sx={{ borderRadius: 1 }}
                                                                    />
                                                                ))}
                                                            </Stack>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </Stack>
                                        </Container>
                                    </CardContent>
                                </Card>
                            ))}
                        </Stack>
                    </Container>
                ))}
            </Stack>
        </Container>
    );
}
