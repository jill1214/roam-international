import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-24 text-center sm:py-32">
      <h1 className="text-4xl font-extrabold">This page isn't on the itinerary</h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-muted">The link may be old or mistyped. Browse our current tours or head back home.</p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink href="/tours">View Tour Packages</ButtonLink>
        <ButtonLink href="/" variant="secondary">Go home</ButtonLink>
      </div>
    </Container>
  );
}
