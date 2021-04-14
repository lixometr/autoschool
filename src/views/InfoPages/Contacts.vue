<template>
  <div>
    <div class="container landing-body">
      <div class="row">
        <div class="col-xl-8">
          <div class="page-head">
            <h1>Contacts</h1>
            <div class="h5 strong">
              OPLand Corp, a&nbsp;New York corporation
            </div>
          </div>

          <iframe
            class="w-100 mb-2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.1632786185173!2d-73.97633678432871!3d40.60422105213849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244fae00c069f%3A0x830f00fd5c0b0e32!2zNDM0IEtpbmdzIEh3eSwgQnJvb2tseW4sIE5ZIDExMjIzLCDQodCo0JA!5e0!3m2!1sru!2sby!4v1612472696217!5m2!1sru!2sby"
            height="310"
            frameborder="0"
            style="border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <table class="contact-table">
            <tr>
              <td><img src="@/assets/svg/mark.svg" alt="" /></td>
              <td class="smallest">Adress</td>
              <td>434 Kings Highway, Brooklyn New</td>
            </tr>
            <tr>
              <td><img src="@/assets/svg/tel.svg" alt="" /></td>
              <td class="smallest">Phone</td>
              <td><a href="tel:+1(212)752-0100">+1 (212) 752-0100</a></td>
            </tr>
            <tr>
              <td><img src="@/assets/svg/email.svg" alt="" /></td>
              <td class="smallest">E-mail</td>
              <td><a href="mailtol:sample@sample.com">sample@sample.com</a></td>
            </tr>
          </table>
        </div>
        <div class="col-xl-4">
          <FormAside />
        </div>
      </div>
    </div>
    <DiscountLine />
  </div>
</template>

<style  ></style>

<script>
import DiscountLine from "@/components/DiscountLine.vue";
import FormAside from "@/components/FormAside.vue";

export default {
  name: "Contacts",
  components: {
    DiscountLine,
    FormAside,
  },
};
</script>
