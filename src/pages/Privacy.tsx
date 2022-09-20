import {
  CardParagraph,
  CardSubheader,
  HeaderText,
  LinkText,
} from 'components/ui/Text'
import Card from 'components/ui/Card'
import ScrollToTop from 'components/ui/ScrollToTop'
import classnames, {
  display,
  flexDirection,
  gap,
  space,
} from 'classnames/tailwind'

const sectionClasses = classnames(
  display('flex'),
  flexDirection('flex-col'),
  gap('gap-y-2')
)

const verticalSpace = space('space-y-4')
export default function () {
  return (
    <Card>
      <div className={verticalSpace}>
        <HeaderText>Privacy policy</HeaderText>
        <div className={verticalSpace}>
          <section className={sectionClasses}>
            <CardParagraph>
              Project operates the website listed at echo.sealcred.xyz, which
              provides the SERVICE.
            </CardParagraph>
            <CardParagraph>
              This page is used to inform website visitors regarding our
              policies with the collection, use, and disclosure of Personal
              Information if anyone decided to use our Service, the website.
            </CardParagraph>
            <CardParagraph>
              If you choose to use our Service, then you agree to the collection
              and use of information in relation with this policy. The Personal
              Information that we collect is used for providing and improving
              the Service. We will not use or share your information with anyone
              except as described in this Privacy Policy.
            </CardParagraph>
          </section>
          <section className={sectionClasses}>
            <CardSubheader>Information Collection and Use</CardSubheader>
            <CardParagraph>
              For a better experience while using our Service, we may require
              you to provide us with certain personally identifiable
              information, including but not limited to your name, phone number,
              and postal address. The information that we collect will be used
              to contact or identify you.
            </CardParagraph>
          </section>
          <section className={sectionClasses}>
            <CardSubheader>Log Data</CardSubheader>
            <CardParagraph>
              We want to inform you that whenever you visit our Service, we
              collect information that your browser sends to us that is called
              Log Data. This Log Data may include information such as your
              computer’s Internet Protocol ("IP") address, browser version,
              pages of our Service that you visit, the time and date of your
              visit, the time spent on those pages, and other statistics.
            </CardParagraph>
          </section>
          <section className={sectionClasses}>
            <CardSubheader>Cookies</CardSubheader>
            <CardParagraph>
              Cookies are files with small amount of data that is commonly used
              an anonymous unique identifier. These are sent to your browser
              from the website that you visit and are stored on your computer’s
              hard drive.
            </CardParagraph>
            <CardParagraph>
              Our website uses these "cookies" to collect information and to
              improve our Service. You have the option to either accept or
              refuse these cookies, and know when a cookie is being sent to your
              computer. If you choose to refuse our cookies, you may not be able
              to use some portions of our Service.
            </CardParagraph>
          </section>
          <section className={sectionClasses}>
            <CardSubheader>Service Providers</CardSubheader>
            <CardParagraph>
              We may employ third-party companies and individuals due to the
              following reasons: To facilitate our Service; To provide the
              Service on our behalf; To perform Service-related services; or To
              assist us in analyzing how our Service is used. We want to inform
              our Service users that these third parties have access to your
              Personal Information. The reason is to perform the tasks assigned
              to them on our behalf. However, they are obligated not to disclose
              or use the information for any other purpose.
            </CardParagraph>
          </section>
          <section className={sectionClasses}>
            <CardSubheader>Security</CardSubheader>
            <CardParagraph>
              We value your trust in providing us your Personal Information,
              thus we are striving to use commercially acceptable means of
              protecting it. But remember that no method of transmission over
              the internet, or method of electronic storage is 100% secure and
              reliable, and we cannot guarantee its absolute security.
            </CardParagraph>
          </section>
          <section className={sectionClasses}>
            <CardSubheader>Links to Other Sites</CardSubheader>
            <CardParagraph>
              Our Service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that
              these external sites are not operated by us. Therefore, we
              strongly advise you to review the Privacy Policy of these
              websites. We have no control over, and assume no responsibility
              for the content, privacy policies, or practices of any third-party
              sites or services.
            </CardParagraph>
          </section>
          <section className={sectionClasses}>
            <CardSubheader>Children’s Privacy</CardSubheader>
            <CardParagraph>
              Our Services do not address anyone under the age of 13. We do not
              knowingly collect personal identifiable information from children
              under 13. In the case we discover that a child under 13 has
              provided us with personal information, we immediately delete this
              from our servers. If you are a parent or guardian and you are
              aware that your child has provided us with personal information,
              please contact us so that we will be able to do necessary actions.
            </CardParagraph>
          </section>
          <section className={sectionClasses}>
            <CardSubheader>Changes to This Privacy Policy</CardSubheader>
            <CardParagraph>
              We may update our Privacy Policy from time to time. Thus, we
              advise you to review this page periodically for any changes. We
              will notify you of any changes by posting the new Privacy Policy
              on this page. These changes are effective immediately, after they
              are posted on this page.
            </CardParagraph>
          </section>
          <section className={sectionClasses}>
            <CardSubheader>
              Requesting Deletion of Your Information
            </CardSubheader>
            <CardParagraph>
              If you would like to delete your information from our Service, you
              may do so by contacting us at{' '}
              <LinkText url="mailto:request@bwl.gg?subject=Request removing information">
                request@bwl.gg
              </LinkText>
              .
            </CardParagraph>
          </section>
          <section className={sectionClasses}>
            <CardSubheader>Contact Us</CardSubheader>
            <CardParagraph>
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us at{' '}
              <LinkText url="mailto:privacy@bwl.gg?subject=Privacy Policy question">
                privacy@bwl.gg
              </LinkText>
              .
            </CardParagraph>
          </section>
        </div>
      </div>
      <ScrollToTop />
    </Card>
  )
}
