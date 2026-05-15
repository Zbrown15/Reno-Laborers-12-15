import type { ServiceData } from "@/lib/services-data";
import type { ServiceAreaData } from "@/lib/service-areas-data";
import { SITE_NAME, SITE_URL, SITE_EMAIL, absoluteUrl } from "@/lib/site-config";

export type FaqPair = { question: string; answer: string };

export const FAQ_COUNT = 8;

/**
 * FAQPage JSON-LD (Google FAQ rich results).
 * Must match visible FAQ copy on the same URL.
 * @see https://developers.google.com/search/docs/appearance/structured-data/faqpage
 */
export function faqPageSchema(pagePath: string, faqs: readonly FaqPair[]) {
  const url = absoluteUrl(pagePath);
  return {
    "@type": "FAQPage",
    "@id": `${url}#faqpage`,
    url,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

const REGION = "Reno, Sparks, Spanish Springs, and Incline Village, Nevada";
const PHONE = "(858) 275-4671";

/** Homepage: trust, pricing, coverage, contracts, one-person model. */
export function getHomeFaqPairs(): FaqPair[] {
  return [
    {
      question: "Do you actually serve my neighborhood in Reno or Sparks?",
      answer: `Yes—${SITE_NAME} works across ${REGION}, plus nearby Washoe County routes when scheduling allows. If you are on the edge of town, tell us your address on the contact form and we will confirm availability before we book you in.`,
    },
    {
      question: "I am used to big crews—why should I trust a one-person lawn service?",
      answer: `You get the same person on your property, clear communication, and consistent quality—without paying for a large company’s overhead. If something looks off, you talk directly to the person doing the work, and we fix it fast.`,
    },
    {
      question: "How much does lawn care cost in Northern Nevada?",
      answer: `Pricing depends on lot size, fence lines, obstacles, frequency, and what services you combine (mowing, edging, weeds, cleanup, snow). We will give you a straightforward written estimate after a quick scope—no surprise add-ons without your approval.`,
    },
    {
      question: "Will you lock me into a long contract?",
      answer: `No pressure. Many customers choose recurring maintenance because it keeps results consistent, but we also do one-time visits and seasonal cleanups. You choose what fits your budget and schedule.`,
    },
    {
      question: "What if the weather changes or my schedule shifts last minute?",
      answer: `Northern Nevada weather moves fast. If wind, heat, or storms force a reschedule, we communicate early and rebook you as soon as it is safe to deliver a good outcome—without rushing work that will not hold up.`,
    },
    {
      question: "I worry about reliability—how do I know you will show up?",
      answer: `We run tight routes, confirm access details, and text/call when needed. If we ever run behind, we notify you—because showing up is the whole point. If you want references or photos from similar yards, ask when you request a quote.`,
    },
    {
      question: "Do you work with renters, HOAs, and small businesses—or only homeowners?",
      answer: `We serve homeowners, renters (with permission), HOAs that allow outside vendors, and small commercial lots in our service area. Tell us about parking, gates, and any HOA rules up front so the first visit goes smoothly.`,
    },
    {
      question: "What is the fastest way to get a quote today?",
      answer: `Use ${SITE_URL}/contact with your address, approximate lot size, photos if you have them, and the services you want. You can also call or text ${PHONE}. We will respond with next steps and pricing options.`,
    },
  ];
}

function mowingFaqs(): FaqPair[] {
  return [
    {
      question: "Is weekly mowing really necessary in Reno’s dry summers?",
      answer: `Not always. We recommend a schedule based on grass type, irrigation, shade, and how fast your lawn grows. Some lawns do well on bi-weekly service during slower growth; others need weekly during peak heat. We will not upsell you into weekly if bi-weekly is the better fit.`,
    },
    {
      question: "My grass is tall and patchy—will you still take the job?",
      answer: `Usually yes, but overgrown lawns may need a first cut staged for health (multiple passes or a slightly higher first cut) so we do not scalp the turf. We will tell you upfront what the first visit requires so you are not surprised on billing or results.`,
    },
    {
      question: "Do you bag clippings or mulch them back in?",
      answer: `We choose the best approach for your lawn’s condition and the season. Mulching can return nutrients when appropriate; bagging helps when there is excessive thatch, weeds going to seed, or you need a cleaner look for an event. We will recommend what makes sense for your yard.`,
    },
    {
      question: "What mowing height do you use—and why does it matter?",
      answer: `We mow at heights that protect roots and reduce water stress in high-desert heat—typically taller in summer stress periods and adjusted after irrigation or seasonal growth changes. The goal is a healthy lawn, not the shortest possible cut.`,
    },
    {
      question: "Can you avoid certain zones (sprinklers, garden beds, dog runs)?",
      answer: `Yes. Mark problem areas or tell us in the quote request. We route equipment carefully, use string trimming where needed, and adjust patterns around beds, utilities, and pet areas so we protect what you care about.`,
    },
    {
      question: "I only want mowing every two weeks—is that okay?",
      answer: `Bi-weekly can work for some lawns, but it can also mean more thatch, weed pressure, and uneven growth in peak season. If bi-weekly is not delivering the look you want, we will explain why—without shaming you—and suggest a realistic plan.`,
    },
    {
      question: "Why not hire the cheapest mower I can find?",
      answer: `Cheap cuts often skip edging, scalp grass, leave clumps, and disappear when something goes wrong. ${SITE_NAME} focuses on consistent edges, even stripes, proper cleanup, and accountability—because redoing a bad mow costs more than doing it right once.`,
    },
    {
      question: "What should I do before the first mowing visit?",
      answer: `Pick up pet waste and toys, unlock gates, and note sprinkler heads or soft spots. If you want a specific pattern or areas skipped, leave a note or message us. We will confirm access and billing expectations before we start.`,
    },
  ];
}

function weedFaqs(): FaqPair[] {
  return [
    {
      question: "I tried spraying weeds myself and they came back—what is different about your approach?",
      answer: `Weeds return when the root system survives, seeds spread, or bare spots invite new growth. We combine removal/prevention tactics suited to your beds and lawn edges, then address the conditions (thin grass, compaction, irrigation patterns) that keep inviting weeds back.`,
    },
    {
      question: "Are treatments safe around pets and kids?",
      answer: `We take applications seriously: we follow label guidance, avoid unnecessary overlap, and communicate re-entry timing when products require it. Tell us about pets, vegetable gardens, and sensitive areas up front so we plan the safest workable approach.`,
    },
    {
      question: "Do you pull weeds, spray, or both?",
      answer: `It depends on the weed type, location, and whether you have desirable plants nearby. Sometimes hand pulling is best in tight beds; other times targeted treatment makes sense for gravel strips or recurring invaders. We will recommend the most effective mix—not a one-size-fits-all spray-everything approach.`,
    },
    {
      question: "How long before I see results?",
      answer: `Some weeds wilt quickly; others take longer because they reproduce by root runners or seeds. We set realistic expectations up front and schedule follow-ups when needed so you are not stuck guessing whether the program is working.`,
    },
    {
      question: "Can you treat weeds in rock beds, cracks, and fence lines?",
      answer: `Yes—those are common problem areas in Northern Nevada. We treat carefully to reduce drift onto desirable plants and hard surfaces you do not want stained, and we adjust methods for wind days.`,
    },
    {
      question: "What if it rains or wind kicks up right after treatment?",
      answer: `Weather can affect timing and product performance. If conditions are not right, we reschedule rather than waste your money on a treatment that will not hold. We would rather be honest than promise a miracle on a bad weather day.`,
    },
    {
      question: "I do not want my lawn turned into a chemical-heavy yard—what are my options?",
      answer: `We focus on targeted work and cultural practices (mowing height, edging, reducing bare soil) that make weeds less competitive. If you want a lighter-touch plan, tell us your comfort level and we will build a realistic program you can stick with.`,
    },
    {
      question: "Do I need to be home for weed control service?",
      answer: `Not always—if we have clear access, permission, and payment/approval arranged. If you want a walkthrough first, we can schedule a time that works. Communication is the main thing: gates, dogs, and off-limit zones should be spelled out before we arrive.`,
    },
  ];
}

function edgingFaqs(): FaqPair[] {
  return [
    {
      question: "Is lawn edging just cosmetic—or does it actually help?",
      answer: `Clean edges make beds and hardscapes look intentional, but they also reduce grass creeping into rock and mulch, which cuts down maintenance over time. It is one of the fastest ways to improve curb appeal without a full landscape remodel.`,
    },
    {
      question: "I am worried you will damage my concrete or pavers—how do you prevent that?",
      answer: `We use controlled techniques along hard edges, watch for uneven joints, and adjust depth/speed to the surface. If you have fragile older pavers or decorative borders, tell us before we start so we choose the safest approach.`,
    },
    {
      question: "My edges are overgrown into the driveway—can you fix that in one visit?",
      answer: `Often yes, but heavy overgrowth may take longer than a standard edge reset. We will quote the scope honestly so you are not surprised if the first visit is a “catch-up” edge rather than a 10-minute touch-up.`,
    },
    {
      question: "How often should edging be done?",
      answer: `Many properties benefit from edging included with regular mowing, while others need periodic refresh every few visits depending on grass type and how fast lines blur. We will recommend a rhythm that matches how crisp you want it to look.`,
    },
    {
      question: "Can you edge around sprinkler heads and utilities?",
      answer: `Yes—those spots need extra care. Flag unknown heads if you can, and we will hand-detail where machine work is risky. If a head is already damaged, we document it before work so there is no confusion about what existed beforehand.`,
    },
    {
      question: "I only want edging—do you offer that without mowing?",
      answer: `If scheduling allows, yes. Keep in mind edging without mowing sometimes highlights uneven turf height, so we will tell you if pairing services will give you a cleaner overall result.`,
    },
    {
      question: "Why does my yard look messy again two weeks after edging?",
      answer: `Grass grows. In warm months, lines soften quickly—especially along hot driveways. That is normal, not a sign of “bad edging.” If you want a longer-lasting crisp look, we adjust frequency or combine with mowing on a tighter cadence.`,
    },
    {
      question: "What do you need from me before edging day?",
      answer: `Clear cars from the driveway edge if possible, unlock side gates, and note any new landscaping you do not want touched. Photos in your quote request help us estimate time accurately.`,
    },
  ];
}

function leafFaqs(): FaqPair[] {
  return [
    {
      question: "I have pine needles everywhere—is raking enough or do I need more?",
      answer: `Pine needles can smother turf and acidify the surface layer if they sit too long. Raking/bagging or removal helps airflow and reduces pest habitat. If your tree cover is heavy, we will recommend a realistic cleanup frequency so you are not fighting the same mess every weekend.`,
    },
    {
      question: "Will leaf cleanup damage my lawn if it is wet?",
      answer: `Wet leaves are heavier and can tear turf if rushed. We adjust technique, timing, and equipment pressure to avoid unnecessary damage—sometimes splitting a big cleanup into two passes is the smarter move.`,
    },
    {
      question: "Do you haul debris away or leave it at the curb?",
      answer: `Tell us what you want. Many customers want bagged removal for a clean finish; others have green waste bins. We confirm disposal expectations up front so billing and logistics match what you pictured.`,
    },
    {
      question: "I only want a one-time fall cleanup—is that okay?",
      answer: `Yes. One-time cleanups are common after wind events or before hosting. If the property is larger than it looks in photos, we will update the estimate before we start heavy work.`,
    },
    {
      question: "Why should I pay for leaf removal instead of blowing it to the curb myself?",
      answer: `Curbside blowing can violate HOA rules, clog storm drains, and create neighbor issues. Professional cleanup focuses on lawn health, thorough pickup, and responsible handling—so you are not trading one headache for another.`,
    },
    {
      question: "Can you work around my irrigation schedule?",
      answer: `Yes—wet lawns and running sprinklers change what we can do safely and cleanly. Tell us your watering days/times and we will schedule accordingly.`,
    },
    {
      question: "What if I have tons of leaves but a small green waste bin?",
      answer: `No problem—we plan for off-site bagging/removal when bins cannot handle volume. That is a common Reno/Sparks constraint, and we price it clearly.`,
    },
    {
      question: "How do I prepare for a leaf cleanup visit?",
      answer: `Move fragile decorations, mark hidden wires, and unlock access. If pets use the yard, pick up waste before we arrive so we can work efficiently and safely.`,
    },
  ];
}

function snowFaqs(): FaqPair[] {
  return [
    {
      question: "Do you plow or only shovel—and how deep does snow need to be?",
      answer: `${SITE_NAME} focuses on shoveling and clearing walkways, porches, and driveways where a shovel-based approach is appropriate for the property. Tell us your driveway length, slope, and ice concerns when you request service so we set expectations correctly.`,
    },
    {
      question: "I am worried about slip-and-fall liability on my walkway—can you help?",
      answer: `We prioritize safe passage: clear edges, even paths, and sensible ice awareness. We are not a substitute for your insurance or legal advice, but we do take cleanup seriously because winter injuries are real—and preventable with consistent maintenance.`,
    },
    {
      question: "What if the city plow buries my driveway apron again?",
      answer: `That is frustrating—and common. We can discuss a plan for return visits after plow waves during active storms, and we will be honest about what is practical during heavy weather windows.`,
    },
    {
      question: "Will you salt my concrete?",
      answer: `If you want de-icing products, tell us your surface type (stamped concrete, pavers, older aggregate). Some products can damage finishes. We choose conservative approaches unless you request a specific product you already trust.`,
    },
    {
      question: "Why not just buy a snowblower?",
      answer: `Equipment makes sense for some people—but storage, maintenance, and time add up. If you travel, rent your home, or simply do not want winter chores, scheduled clearing keeps you functional without another machine in the garage.`,
    },
    {
      question: "Do I need to be home?",
      answer: `Not always, if we have permission, clear access, and agreed scope/payment. Many customers prefer morning clears before work—communication and access are the keys.`,
    },
    {
      question: "What if I call last minute during a storm?",
      answer: `We do our best, but storms create queues. Priority goes to existing route customers and jobs we can complete safely. Early requests and recurring customers get more predictable scheduling during winter peaks.`,
    },
    {
      question: "How do you price snow removal?",
      answer: `Driveway size, depth, ice, obstacles, and whether you need front walks, side gates, and porches included. We quote clearly so you are not guessing after the storm hits.`,
    },
  ];
}

/** Service detail pages: 8 FAQs per service slug (matches on-page + JSON-LD). */
export function getServiceFaqPairs(service: ServiceData): FaqPair[] {
  switch (service.slug) {
    case "lawn-mowing":
      return mowingFaqs();
    case "weed-control":
      return weedFaqs();
    case "lawn-edging":
      return edgingFaqs();
    case "leaf-raking":
      return leafFaqs();
    case "snow-shoveling":
      return snowFaqs();
    default:
      return mowingFaqs();
  }
}

function renoAreaFaqs(area: ServiceAreaData): FaqPair[] {
  const label = area.name;
  return [
    {
      question: `Who is the best lawn mowing service in ${label}?`,
      answer: `“Best” depends on what you value—reliability, communication, edging quality, and honest pricing. ${SITE_NAME} focuses on consistent routes in ${label}, clear estimates, and work you can see (clean edges, even cuts, thorough cleanup). Compare reviews, ask about insurance expectations, and choose a provider who answers questions directly.`,
    },
    {
      question: `How much does lawn care cost in ${label}?`,
      answer: `Reno lots vary widely—corner lots, RV parking, irrigation quirks, and fencing all change time on site. We price after scope, not guesswork from a satellite image alone. Request a quote at ${SITE_URL}/contact and we will break down what drives the number.`,
    },
    {
      question: `My HOA is picky—will you follow community rules?`,
      answer: `Yes—send the relevant rules (height, edging, debris, noise windows). We document access points and plan work so you are not stuck between an HOA letter and a vague contractor promise.`,
    },
    {
      question: `I am worried about summer heat stressing my lawn—what do you recommend?`,
      answer: `Heat management is not just “mow shorter.” We adjust frequency/height for stress periods, keep blades clean for a healthy cut, and coordinate with your watering reality. If weeds are exploiting thin spots, we will tell you straight—so you are not paying for a cosmetic fix to a soil/thatch problem.`,
    },
    {
      question: `Do you serve Midtown, South Reno, and newer developments?`,
      answer: `We schedule across Reno neighborhoods when routes allow. Tell us your subdivision and gate/access details—new builds often have soft shoulders, tight side yards, and new sod rules that matter for the first season.`,
    },
    {
      question: `I want a one-time cleanup before selling—can you help?`,
      answer: `Yes. Pre-listing cleanups are common: mowing, edging, weed touch-ups, and leaf/needle removal to improve first impressions. We will prioritize what moves the needle for showings.`,
    },
    {
      question: `What if I am not happy with the visit?`,
      answer: `Tell us within 24 hours with photos if possible. We fix legitimate misses—communication beats silence. If expectations were unclear, we clarify scope and adjust so the next visit hits what you wanted.`,
    },
    {
      question: `How fast can you start in ${label}?`,
      answer: `It depends on season and route density. Message ${SITE_URL}/contact or text/call ${PHONE} with your address and priorities—we will propose realistic start dates instead of overpromising.`,
    },
  ];
}

function sparksAreaFaqs(area: ServiceAreaData): FaqPair[] {
  const label = area.name;
  return [
    {
      question: `Do you provide lawn care in ${label} on a recurring schedule?`,
      answer: `Yes—many Sparks customers choose weekly or bi-weekly mowing with periodic edging and seasonal cleanups. Recurring routes help us keep pricing fair and show up predictably, which is usually the biggest concern homeowners mention.`,
    },
    {
      question: `My lawn grows fast near the river corridor—can you keep up?`,
      answer: `Fast growth usually means adjusting cadence in peak months—not skipping quality. If bi-weekly becomes “always shaggy,” we will tell you honestly and suggest a summer weekly window or targeted double-cut plan.`,
    },
    {
      question: `I am comparing quotes—why are prices different between companies?`,
      answer: `Quotes differ when companies include different scopes (edging, bagging, weed touch-ups), use different equipment speeds, or underestimate obstacles. We spell out what is included so you are not comparing a “cheap mow” to a full-service visit.`,
    },
    {
      question: `Do you do commercial strips and small business lots in Sparks?`,
      answer: `Select small commercial accounts fit our route model when access and expectations are clear. Tell us about parking, trash days, and liability requirements before we schedule.`,
    },
    {
      question: `What about weeds blowing in from empty lots nearby?`,
      answer: `We can’t control neighboring parcels, but we can reduce your property’s weed pressure with edging, healthy turf practices, and targeted cleanup so seeds have less room to establish.`,
    },
    {
      question: `I work long hours—do I have to be home?`,
      answer: `Often no—if gates are accessible and pets are secured. We confirm instructions for side yards, locked areas, and payment/approval so the visit is smooth.`,
    },
    {
      question: `I am near Victorian Avenue / the Oddie corridor—will parking or tight access slow you down?`,
      answer: `Dense Sparks streets and busy commercial-adjacent blocks are common. Tell us about on-street parking, alley access, and where equipment can stage. We plan so we are not blocking neighbors or rushing a cut because the truck is in the wrong spot.`,
    },
    {
      question: `What should I include in my first message?`,
      answer: `Address, approximate lot size, fence/gate notes, HOA constraints, and photos. The more specific you are, the fewer back-and-forth messages you need before we start.`,
    },
  ];
}

function spanishSpringsAreaFaqs(area: ServiceAreaData): FaqPair[] {
  const label = area.name;
  return [
    {
      question: `Do you serve Spanish Springs neighborhoods for weekly mowing?`,
      answer: `Yes—${SITE_NAME} schedules Spanish Springs when routes align with nearby Washoe County work. Spanish Springs lawns often deal with wind-blown debris and seasonal weed pressure, so we plan edging and cleanup realistically—not “just a quick mow.”`,
    },
    {
      question: `My HOA requires a tidy appearance—can you keep edges photo-ready?`,
      answer: `HOA feedback is usually about edges, weeds in rock, and driveway lines. We can build a maintenance rhythm (mow + edging + periodic bed touch-ups) that keeps those trouble spots under control.`,
    },
    {
      question: `Wind storms leave debris in my yard—do you handle that?`,
      answer: `Yes—tell us if you want storm cleanup as a one-time add-on or bundled seasonally. Heavy debris changes time on site, so we price it clearly before we start.`,
    },
    {
      question: `I am worried about gate codes and dogs—how do you handle access?`,
      answer: `Provide the code securely, note dog schedules, and flag any reactive pets. We pause work if access is unsafe—no exceptions—because nobody wins with a rushed visit.`,
    },
    {
      question: `Do you treat weeds in rock beds common in Spanish Springs yards?`,
      answer: `Yes—rock beds are weed magnets. We combine mechanical removal and targeted approaches depending on nearby plants, wind conditions, and what you want protected.`,
    },
    {
      question: `Why does my lawn look good after service but bumpy again in two weeks?`,
      answer: `Growth and weeds do not pause. If irrigation runs hot or soil is thin, turf can look uneven quickly. We will tell you if the issue is scheduling, soil compaction, or irrigation distribution—instead of pretending another mow alone fixes it.`,
    },
    {
      question: `Can you coordinate around my sprinkler clock?`,
      answer: `Yes—wet turf and active sprinklers change what we can do cleanly. Share watering days/times and we will schedule around them when possible.`,
    },
    {
      question: `How do I get a quote for ${label}?`,
      answer: `Use ${SITE_URL}/contact with your address and photos. Mention HOA rules if applicable. We will confirm service area fit and propose options.`,
    },
  ];
}

function inclineAreaFaqs(area: ServiceAreaData): FaqPair[] {
  const label = area.name;
  return [
    {
      question: `Do you provide lawn care in ${label} with mountain seasons in mind?`,
      answer: `Yes—Incline properties often have shorter growing seasons, different stress patterns, and snow demands that low-elevation lawns do not. We set expectations up front about timing, access during snow periods, and what results are realistic for your microclimate.`,
    },
    {
      question: `I am worried about snow and ice on steep walkways—can you help safely?`,
      answer: `We prioritize safe passage and conservative techniques on tricky surfaces. Tell us about handrails, ice buildup patterns, and areas you want treated vs. avoided. If a slope is beyond what we can safely service, we will say so—rather than risk a bad outcome.`,
    },
    {
      question: `Why is mountain lawn care “different” than Reno or Sparks?`,
      answer: `Elevation changes growth rates, soil moisture, and recovery time. A schedule that works in Sparks may be too aggressive in Incline. We adjust frequency and cutting approach so we are not pushing turf when it is already stressed.`,
    },
    {
      question: `Can you handle pine needles and forest debris near the home?`,
      answer: `Often yes—needle buildup can smother turf and create slip hazards on paths. We plan cleanup scope based on volume and disposal options, because mountain debris piles add time fast.`,
    },
    {
      question: `I only need seasonal help—do you take one-time jobs?`,
      answer: `Yes—spring opening, pre-summer prep, fall cleanup, and storm cleanups are common. We will quote honestly if the job needs two visits instead of one marathon day.`,
    },
    {
      question: `What if weather cancels my appointment?`,
      answer: `Mountain weather can interrupt schedules quickly. We communicate reschedules early and prioritize safety over “forcing” a visit in unsafe conditions.`,
    },
    {
      question: `Do you work with vacation homes and remote owners?`,
      answer: `Yes—clear access instructions, photos, and payment approval are key. Many second-home owners want predictable maintenance windows; we align scope to what you want checked while you are away.`,
    },
    {
      question: `How do I contact you for ${label} service?`,
      answer: `Start at ${SITE_URL}/contact with the property address, gate details, and photos. You can also text/call ${PHONE}. Mention “Incline” and access constraints so we route you correctly.`,
    },
  ];
}

/** Service area pages: 8 FAQs per slug (matches on-page + JSON-LD). */
export function getServiceAreaFaqPairs(area: ServiceAreaData): FaqPair[] {
  switch (area.slug) {
    case "reno":
      return renoAreaFaqs(area);
    case "sparks":
      return sparksAreaFaqs(area);
    case "spanish-springs":
      return spanishSpringsAreaFaqs(area);
    case "incline-village":
      return inclineAreaFaqs(area);
    default:
      return renoAreaFaqs(area);
  }
}
