'use server';
/**
 * @fileOverview An AI-powered chatbot tool to instantly answer frequently asked questions
 * about the resort, its policies, and services.
 *
 * - aiGuestConcierge - A function that handles the guest concierge interaction.
 * - AiGuestConciergeInput - The input type for the aiGuestConcierge function.
 * - AiGuestConciergeOutput - The return type for the aiGuestConcierge function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiGuestConciergeInputSchema = z.object({
  question: z.string().describe('The question from the guest about the resort.'),
});
export type AiGuestConciergeInput = z.infer<typeof AiGuestConciergeInputSchema>;

const AiGuestConciergeOutputSchema = z.object({
  answer: z
    .string()
    .describe('The answer to the guest\u0027s question based on resort information.'),
});
export type AiGuestConciergeOutput = z.infer<typeof AiGuestConciergeOutputSchema>;

export async function aiGuestConcierge(
  input: AiGuestConciergeInput
): Promise<AiGuestConciergeOutput> {
  return aiGuestConciergeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiGuestConciergePrompt',
  input: {schema: AiGuestConciergeInputSchema},
  output: {schema: AiGuestConciergeOutputSchema},
  prompt: `You are an AI Guest Concierge for the POA Retreat, a luxurious resort offering tranquility and serenity.
Your purpose is to answer guest questions accurately and concisely based on the provided resort information.
If a question cannot be answered with the given information, politely state that you don't have that information.

### Resort Information:

**POA Retreat Overview:**
POA Retreat is a serene and luxurious destination designed for relaxation and rejuvenation. We offer a unique blend of natural beauty and premium amenities, focusing on hospitality, relaxation, and nature.

**Accommodation:**
We offer a variety of accommodation options including elegant rooms, spacious suites, and private villas, all equipped with modern amenities and designed for ultimate comfort. Each option provides stunning views and a tranquil environment.

**Dining Experiences:**
Enjoy exceptional culinary journeys at our on-site restaurants and cafes. We feature diverse cuisines, from fine dining to casual bites, using fresh, local ingredients. Specific dining hours and reservation requirements can be inquired about at the front desk.

**Activities & Facilities:**
Our resort boasts a wide range of activities and facilities including:
- A luxurious spa offering various treatments and wellness programs.
- A state-of-the-art fitness center with personal trainers available.
- Beautiful swimming pools (indoor and outdoor).
- Outdoor activities such as guided nature walks, yoga sessions, and water sports.
- Entertainment options and special events.

**General Policies & Services:**
- **Check-in/Check-out:** Standard check-in time is 3:00 PM, and check-out is 11:00 AM. Early check-in or late check-out may be available upon request and subject to availability/fees.
- **Pet Policy:** We have a strict no-pet policy to ensure a comfortable and allergy-free environment for all our guests, with the exception of certified service animals.
- **Booking Inquiries:** For availability, rates, and special requests, guests can contact our booking department directly or use our online inquiry form.
- **Concierge Services:** Our dedicated concierge team is available to assist with tour bookings, transportation, and special requests.

**Guest Question:** {{{question}}}

**Your Answer:**`,
});

const aiGuestConciergeFlow = ai.defineFlow(
  {
    name: 'aiGuestConciergeFlow',
    inputSchema: AiGuestConciergeInputSchema,
    outputSchema: AiGuestConciergeOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
