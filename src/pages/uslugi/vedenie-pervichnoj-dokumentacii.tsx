import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { 
  FiCheckCircle, 
  FiArrowRight, 
  FiClock, 
  FiDollarSign, 
  FiShield, 
  FiUsers,
  FiFileText,
  FiPhone,
  FiClipboard
} from 'react-icons/fi';

const VedeniePervichnojDokumentacii: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Ведение первичной документации - Smart Accounting</title>
        <meta 
          name="description" 
          content="Профессиональные услуги по ведению первичной документации для вашего бизнеса. Организация документооборота и контроль за движением документов от Smart Accounting" 
        />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#fcfcfc] text-[#2e2e2e] overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#c9a875]/10 rounded-full filter blur-[150px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center text-gray-600 mb-6">
            <Link href="/services" className="hover:text-[#c9a875] transition-colors flex items-center">
              <span className="mr-2">&#8592;</span>
              <span>Все услуги</span>
            </Link>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
              Ведение первичной документации
            </h1>
            <p className="text-xl mb-8 text-gray-600" data-aos="fade-up" data-aos-delay="100">
              Профессиональная организация учета и контроля всех первичных документов вашего бизнеса
            </p>
            <div className="flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="200">
              <Link 
                href="/contact" 
                className="bg-[#c9a875] hover:bg-[#b8956a] text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center"
              >
                Получить консультацию
                <FiArrowRight className="ml-2" />
              </Link>
              <Link 
                href="/calculator" 
                className="bg-white border border-[#c9a875] text-[#c9a875] hover:bg-[#c9a875]/5 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Рассчитать стоимость
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3" data-aos="fade-up">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Полное ведение первичной документации</h2>
                <p>
                  ООО "Smart Accounting" предлагает услуги по организации и ведению первичной 
                  документации для вашего бизнеса. Первичные документы являются основой для правильного 
                  бухгалтерского учета и обязательны для налогового учета.
                </p>
                <p>
                  Мы берем на себя полный цикл работы с документами, от составления и проверки до 
                  архивирования и хранения, что освобождает ваше время для решения бизнес-задач.
                </p>
                <h3 className="text-2xl font-bold mt-10 mb-6 text-gray-800">Наши услуги включают:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#c9a875] mt-1 mr-3 flex-shrink-0" />
                    <span>Оформление и проверку счетов, счетов-фактур, накладных, актов</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#c9a875] mt-1 mr-3 flex-shrink-0" />
                    <span>Подготовку договоров и дополнительных соглашений</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#c9a875] mt-1 mr-3 flex-shrink-0" />
                    <span>Разработку и внедрение системы документооборота</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#c9a875] mt-1 mr-3 flex-shrink-0" />
                    <span>Организацию и контроль за движением документов</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#c9a875] mt-1 mr-3 flex-shrink-0" />
                    <span>Формирование кассовых и банковских документов</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#c9a875] mt-1 mr-3 flex-shrink-0" />
                    <span>Учет товарно-материальных ценностей</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#c9a875] mt-1 mr-3 flex-shrink-0" />
                    <span>Создание и поддержание архива документов</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#c9a875] mt-1 mr-3 flex-shrink-0" />
                    <span>Подготовку документов к налоговым проверкам</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:w-1/3" data-aos="fade-up" data-aos-delay="100">
              <div className="sticky top-24">
                <div className="bg-white p-8 rounded-2xl shadow-custom mb-8">
                  <h3 className="text-xl font-semibold mb-6">Почему выбирают нас?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <FiCheckCircle className="text-[#c9a875] mt-1 mr-3 flex-shrink-0" />
                      <span>Опыт работы с различными видами деятельности</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-[#c9a875] mt-1 mr-3 flex-shrink-0" />
                      <span>Знание всех требований законодательства</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-[#c9a875] mt-1 mr-3 flex-shrink-0" />
                      <span>Оперативность и точность в работе</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-[#c9a875] mt-1 mr-3 flex-shrink-0" />
                      <span>Строгое соблюдение сроков</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-[#c9a875] mt-1 mr-3 flex-shrink-0" />
                      <span>Конфиденциальность информации</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-[#c9a875]/5 p-8 rounded-2xl border border-[#c9a875]/10">
                  <h3 className="text-xl font-semibold mb-4">Нужна консультация?</h3>
                  <p className="text-gray-600 mb-6">
                    Свяжитесь с нами для получения подробной информации об услуге "Ведение первичной документации"
                  </p>
                  <Link 
                    href="/contact" 
                    className="bg-[#c9a875] hover:bg-[#b8956a] text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center w-full justify-center"
                  >
                    <FiPhone className="mr-2" />
                    Связаться с нами
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Преимущества работы с нами</h2>
            <p className="text-gray-600 text-lg">
              Доверив нам ведение первичной документации, вы получаете ряд существенных преимуществ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className="bg-white p-8 rounded-xl shadow-custom hover:shadow-hover transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 bg-[#c9a875]/10 rounded-full flex items-center justify-center text-[#c9a875] text-2xl mb-6">
                <FiClipboard />
              </div>
              <h3 className="text-xl font-semibold mb-4">Порядок в документах</h3>
              <p className="text-gray-600">
                Все ваши документы будут правильно оформлены, систематизированы и доступны для оперативного поиска
              </p>
            </div>
            
            <div 
              className="bg-white p-8 rounded-xl shadow-custom hover:shadow-hover transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 bg-[#c9a875]/10 rounded-full flex items-center justify-center text-[#c9a875] text-2xl mb-6">
                <FiShield />
              </div>
              <h3 className="text-xl font-semibold mb-4">Минимизация рисков</h3>
              <p className="text-gray-600">
                Правильно оформленные документы защитят вас от претензий контролирующих органов и контрагентов
              </p>
            </div>
            
            <div 
              className="bg-white p-8 rounded-xl shadow-custom hover:shadow-hover transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-16 h-16 bg-[#c9a875]/10 rounded-full flex items-center justify-center text-[#c9a875] text-2xl mb-6">
                <FiClock />
              </div>
              <h3 className="text-xl font-semibold mb-4">Экономия времени</h3>
              <p className="text-gray-600">
                Вам не придется тратить время на оформление и систематизацию документов, вы сможете сосредоточиться на развитии бизнеса
              </p>
            </div>
            
            <div 
              className="bg-white p-8 rounded-xl shadow-custom hover:shadow-hover transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-16 h-16 bg-[#c9a875]/10 rounded-full flex items-center justify-center text-[#c9a875] text-2xl mb-6">
                <FiDollarSign />
              </div>
              <h3 className="text-xl font-semibold mb-4">Снижение затрат</h3>
              <p className="text-gray-600">
                Аутсорсинг документооборота выгоднее, чем содержание штатного специалиста по документообороту
              </p>
            </div>
            
            <div 
              className="bg-white p-8 rounded-xl shadow-custom hover:shadow-hover transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="w-16 h-16 bg-[#c9a875]/10 rounded-full flex items-center justify-center text-[#c9a875] text-2xl mb-6">
                <FiUsers />
              </div>
              <h3 className="text-xl font-semibold mb-4">Опытная команда</h3>
              <p className="text-gray-600">
                Наши специалисты имеют многолетний опыт работы с различными видами документации и знают все требования
              </p>
            </div>
            
            <div 
              className="bg-white p-8 rounded-xl shadow-custom hover:shadow-hover transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="w-16 h-16 bg-[#c9a875]/10 rounded-full flex items-center justify-center text-[#c9a875] text-2xl mb-6">
                <FiFileText />
              </div>
              <h3 className="text-xl font-semibold mb-4">Полный цикл</h3>
              <p className="text-gray-600">
                Мы берем на себя все этапы документооборота: от составления до архивирования и хранения документов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Как мы работаем</h2>
            <p className="text-gray-600 text-lg">
              Процесс работы с первичной документацией построен на прозрачности и эффективности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white p-8 rounded-xl shadow-custom relative z-10 h-full">
                <div className="w-12 h-12 bg-[#c9a875] text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">Аудит документации</h3>
                <p className="text-gray-600">
                  Анализ текущего состояния документооборота в компании, выявление проблем и потребностей
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-2 bg-[#c9a875]/20 z-0"></div>
            </div>

            <div className="relative" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white p-8 rounded-xl shadow-custom relative z-10 h-full">
                <div className="w-12 h-12 bg-[#c9a875] text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">Разработка системы</h3>
                <p className="text-gray-600">
                  Создание оптимальной системы документооборота с учетом особенностей вашего бизнеса
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-2 bg-[#c9a875]/20 z-0"></div>
            </div>

            <div className="relative" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-white p-8 rounded-xl shadow-custom relative z-10 h-full">
                <div className="w-12 h-12 bg-[#c9a875] text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">Внедрение и обучение</h3>
                <p className="text-gray-600">
                  Внедрение разработанной системы и обучение сотрудников правилам оформления и передачи документов
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-2 bg-[#c9a875]/20 z-0"></div>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white p-8 rounded-xl shadow-custom h-full">
                <div className="w-12 h-12 bg-[#c9a875] text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-4">Постоянное сопровождение</h3>
                <p className="text-gray-600">
                  Ежедневная работа с документами, контроль за их движением, формирование отчетов и архивирование
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Часто задаваемые вопросы</h2>
            <p className="text-gray-600 text-lg">
              Ответы на популярные вопросы о работе с первичной документацией
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-semibold mb-3">Какие документы относятся к первичным?</h3>
              <p className="text-gray-600">
                К первичным документам относятся: счета, счета-фактуры, накладные, акты выполненных работ, 
                платежные поручения, кассовые ордера, договоры, акты сверки, товарные чеки и другие документы, 
                которые фиксируют факт совершения хозяйственной операции.
              </p>
            </div>
            
            <div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold mb-3">Как организован процесс передачи документов?</h3>
              <p className="text-gray-600">
                Вы можете передавать документы удобным для вас способом: лично, через курьера, в электронном виде 
                или с помощью облачных сервисов. Мы также можем организовать регулярный вывоз документов из вашего офиса.
              </p>
            </div>
            
            <div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-semibold mb-3">Сколько времени нужно хранить первичные документы?</h3>
              <p className="text-gray-600">
                Согласно законодательству РФ, первичные документы необходимо хранить не менее 5 лет после года, 
                в котором они были составлены. Однако для некоторых документов сроки хранения могут быть дольше, 
                например, для документов по личному составу — до 75 лет.
              </p>
            </div>
            
            <div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-xl font-semibold mb-3">Можно ли перейти на электронный документооборот?</h3>
              <p className="text-gray-600">
                Да, мы помогаем клиентам внедрять системы электронного документооборота (ЭДО), что значительно 
                ускоряет процессы, снижает риск потери документов и экономит время. Мы работаем со всеми популярными 
                системами ЭДО и можем интегрировать их с вашей учетной системой.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
                      <div className="bg-gradient-to-r from-[#c9a875] to-[#b8956a] rounded-2xl p-12 relative overflow-hidden" data-aos="fade-up">
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full"></div>
            <div className="absolute right-20 bottom-20 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-2/3 mb-8 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Готовы упорядочить документооборот?
                </h2>
                <p className="text-white/90 text-lg max-w-2xl">
                  Свяжитесь с нами, чтобы обсудить, как мы можем помочь вам организовать эффективный документооборот. 
                  Мы предложим оптимальное решение для вашего бизнеса.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white hover:bg-gray-100 text-[#c9a875] px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Получить консультацию
                </Link>
                <Link 
                  href="/calculator" 
                  className="bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Рассчитать стоимость
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default VedeniePervichnojDokumentacii; 