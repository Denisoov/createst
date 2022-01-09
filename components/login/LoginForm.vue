<script lang="ts">
import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'

import { max, required } from '@/helpers/vee-validate-rules'

extend('required', max)
extend('required', required)

export default Vue.extend({
    components: {
        ValidationProvider,
        ValidationObserver
    },
    data () {
        return {
            form: {
                secondName: {
                    id: 'secondName',
                    label: 'Фамилия *',
                    rules: `required`,
                    placeholder: 'Фамилия',
                }
            }
        }
    },
    methods: {
        goToSignIn(): void {
            console.log('вызов есть')
        }
    }
})
</script>

<template>
    <div class="form">
        <h2 class="form__title" >Давайте сделаем первый шаг</h2>
        <span class="form__preview-text">Начать работу быстро и легко, просто заполните информацию ниже</span>
        <validation-observer ref="LogInForm" v-slot="formSlotProps" tag="div">
            <v-form class="form" :value="formSlotProps.valid" @submit.prevent>  
                 <validation-provider
                    v-slot="{ errors }"
                    mode="eager"
                    :rules="form.secondName.rules"
                    :placeholder="form.secondName.placeholder"
                 >
                    <v-text-field
                        placeholder="Фамилия"
                        type="text"
                    ></v-text-field>
                </validation-provider>
            </v-form>
        </validation-observer>

        <v-text-field
            placeholder="Имя"
            type="text"
        ></v-text-field>
        <v-text-field
            placeholder="Отчество"
            type="text"
        ></v-text-field>
        <v-text-field
            class="input__text"
            placeholder="Логин"
        ></v-text-field>
        <v-text-field
             placeholder="Пароль"
             type="password"
        ></v-text-field>
        <div class="content-url--registration">
            У меня
            <a @click="goToSignIn" >нет аккаунта</a>
        </div>
        <button class="button-auth"> 
            Войти
        </button>
    </div>
</template>
<style lang="scss">
    .form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      input {
          width: 300px !important;
          font-family: 'Montserrat-Medium', 'sans-serif';
      }
      // задаем шрифт для всех блоков кроме h2
      & > *:not(.form__title) {
          font-family: 'Montserrat-Medium', 'sans-serif';
      }
    }
    .form__title {
        margin-bottom: 25px;
    }
    .form__preview-text {
        width: 300px;
        text-align: center;
        color: #B4B4B4;
        font-size: 14px;
        margin-bottom: 10px;
    }
    .v-application .primary--text {
        color: rgba(23, 27, 148, 0.42) !important;
        caret-color: rgba(23, 27, 148, 0.42) !important;
    }
    .content-url--registration {
        text-align: center;
        margin: 5px 0 29px 0;
        font-size: 14px;

        a {
            color: rgba(23, 27, 148);
        }
    }
    .button-auth {
        background: #2529B4;
        color: #fff;
        padding: 16px 90px 16px 90px;
        border-radius: 5px;
    }
</style>