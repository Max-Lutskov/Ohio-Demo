<script setup lang="ts">
const sent = ref(false)
const role = ref('Company driver')
// Demo only: the production build posts to a server route and notifies HR.
function submit() { sent.value = true }
</script>

<template>
  <section id="drivers" class="section dark drivers">
    <ResImg name="road" alt="" class="bg" />
    <div class="wrap grid">
      <div>
        <p class="eyebrow">Now hiring CDL-A drivers</p>
        <h2>Drive for a carrier<br>that knows your name.</h2>
        <p class="lead">
          Company drivers and owner-operators. Well-maintained equipment, a safety team that has your back,
          and dispatchers who pick up the phone. Apply in two minutes — we call you back.
        </p>
        <ul class="perks">
          <li><strong>Family culture</strong><span>Employee-owned since day one</span></li>
          <li><strong>Inspected fleet</strong><span>Daily, quarterly &amp; every September</span></li>
          <li><strong>Room to grow</strong><span>Drivers move into dispatch, safety &amp; ops</span></li>
        </ul>
      </div>

      <div class="panel">
        <div v-if="sent" class="success" role="status">
          <strong>Application sent</strong>
          <p>Thanks for your interest in OTC. A recruiter will call you within one business day.</p>
        </div>
        <form v-else class="form" @submit.prevent="submit">
          <h3>Quick application</h3>
          <fieldset class="field">
            <legend class="legend">I’m applying as</legend>
            <div class="chips">
              <label v-for="r in ['Company driver', 'Owner-operator']" :key="r" class="chip">
                <input v-model="role" type="radio" name="role" :value="r"><span>{{ r }}</span>
              </label>
            </div>
          </fieldset>
          <div class="form-row">
            <div class="field"><label for="d-name">Full name</label><input id="d-name" required autocomplete="name"></div>
            <div class="field"><label for="d-phone">Phone</label><input id="d-phone" type="tel" required autocomplete="tel"></div>
          </div>
          <div class="form-row">
            <div class="field">
              <label for="d-exp">CDL-A experience</label>
              <select id="d-exp" required>
                <option value="">Select…</option>
                <option>Less than 1 year</option><option>1–2 years</option><option>3–5 years</option><option>5+ years</option>
              </select>
            </div>
            <div class="field"><label for="d-zip">Home ZIP</label><input id="d-zip" inputmode="numeric" autocomplete="postal-code"></div>
          </div>
          <button class="btn btn-primary" type="submit">Send application <AppIcon name="arrow" /></button>
          <p class="form-note">No résumé needed. We’ll walk you through the rest on the phone.</p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.drivers { position: relative; isolation: isolate; overflow: hidden; }
.bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: -2; opacity: .35; }
.drivers::after { content: ''; position: absolute; inset: 0; z-index: -1; background: linear-gradient(90deg, var(--ink) 30%, rgb(22 24 29 / .75)); }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(32px, 6vw, 80px); align-items: center; }
.perks { list-style: none; margin: 32px 0 0; padding: 0; display: grid; gap: 0; }
.perks li { display: grid; gap: 2px; padding: 16px 0; border-top: 1px solid var(--ink-3); }
.perks strong { font: 700 1.3rem/1.2 var(--display); text-transform: uppercase; }
.perks span { color: var(--muted-on-dark); }
.panel { padding: clamp(22px, 4vw, 36px); border-radius: calc(var(--radius) + 6px); background: rgb(22 24 29 / .85); border: 1px solid var(--ink-3); backdrop-filter: blur(6px); }
.panel h3 { text-transform: uppercase; font-size: 1.7rem; }
fieldset { border: 0; margin: 0; padding: 0; min-width: 0; }
.legend { font-size: .88rem; font-weight: 600; margin-bottom: 6px; padding: 0; color: #e8eaee; }

@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
