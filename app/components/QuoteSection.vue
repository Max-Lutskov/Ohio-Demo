<script setup lang="ts">
import { site } from '~/site.config'

const sent = ref(false)
const equipment = ref('Dry van')
// Demo only: the production build posts to a server route that emails + texts dispatch.
function submit() { sent.value = true }
</script>

<template>
  <section id="quote" class="section quote">
    <div class="wrap grid">
      <div>
        <p class="eyebrow">Shippers &amp; brokers</p>
        <h2>Get a rate in<br>one business day</h2>
        <p class="lead">Tell us lane, equipment and date. A real person from our Columbus dispatch team gets back to you — no call center.</p>
        <ul class="perks">
          <li><AppIcon name="check" />Live tracking and updates on every load</li>
          <li><AppIcon name="check" />One point of contact from pickup to POD</li>
          <li><AppIcon name="check" />Dry van, reefer, flatbed and LTL</li>
        </ul>
        <a :href="site.phoneHref" class="phone"><AppIcon name="phone" />Rather talk? <strong>{{ site.phone }}</strong></a>
      </div>

      <div class="panel">
        <div v-if="sent" class="success" role="status">
          <strong>Request received</strong>
          <p>Thanks — dispatch will reach out with a rate shortly. In the live site this request lands in OTC’s inbox and as a text to the on-duty dispatcher.</p>
        </div>
        <form v-else class="form" @submit.prevent="submit">
          <div class="form-row">
            <div class="field"><label for="q-from">Pickup city or ZIP</label><input id="q-from" required autocomplete="off" placeholder="Columbus, OH"></div>
            <div class="field"><label for="q-to">Delivery city or ZIP</label><input id="q-to" required autocomplete="off" placeholder="Atlanta, GA"></div>
          </div>
          <fieldset class="field">
            <legend class="legend">Equipment</legend>
            <div class="chips">
              <label v-for="e in site.equipment" :key="e" class="chip">
                <input v-model="equipment" type="radio" name="equipment" :value="e"><span>{{ e }}</span>
              </label>
            </div>
          </fieldset>
          <div class="form-row">
            <div class="field"><label for="q-date">Ship date</label><input id="q-date" type="date"></div>
            <div class="field"><label for="q-weight">Approx. weight (lbs)</label><input id="q-weight" inputmode="numeric" placeholder="40,000"></div>
          </div>
          <div class="form-row">
            <div class="field"><label for="q-name">Your name</label><input id="q-name" required autocomplete="name"></div>
            <div class="field"><label for="q-company">Company</label><input id="q-company" autocomplete="organization"></div>
          </div>
          <div class="form-row">
            <div class="field"><label for="q-email">Email</label><input id="q-email" type="email" required autocomplete="email"></div>
            <div class="field"><label for="q-phone">Phone</label><input id="q-phone" type="tel" autocomplete="tel"></div>
          </div>
          <button class="btn btn-primary" type="submit">Request a rate <AppIcon name="arrow" /></button>
          <p class="form-note">We reply within one business day. Mon–Fri 8–5, Sat 9–2 ET.</p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: 5fr 7fr; gap: clamp(32px, 6vw, 80px); align-items: start; }
.perks { list-style: none; margin: 28px 0; padding: 0; display: grid; gap: 12px; }
.perks li { display: flex; gap: 12px; align-items: center; font-weight: 500; }
.perks svg { width: 22px; height: 22px; flex: none; padding: 3px; border-radius: 50%; background: var(--brand-soft); color: var(--brand-ink); }
.phone { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; color: var(--muted); }
.phone svg { width: 20px; height: 20px; color: var(--brand); }
.phone strong { color: var(--text); }
.panel { padding: clamp(22px, 4vw, 40px); border-radius: calc(var(--radius) + 6px); background: #fff; border: 1px solid var(--line); box-shadow: var(--shadow); }
fieldset { border: 0; margin: 0; padding: 0; min-width: 0; }
.legend { font-size: .88rem; font-weight: 600; margin-bottom: 6px; padding: 0; }

@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
