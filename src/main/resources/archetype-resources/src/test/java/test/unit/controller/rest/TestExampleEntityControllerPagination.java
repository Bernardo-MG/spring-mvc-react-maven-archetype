/**
 * The MIT License (MIT)
 * <p>
 * Copyright (c) ${currentYear} the original author or authors.
 * <p>
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * <p>
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * <p>
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

package ${package}.test.unit.controller.rest;

import java.util.ArrayList;
import java.util.Collection;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import ${package}.controller.entity.ExampleEntityController;
import ${package}.model.ExampleEntity;
import ${package}.service.ExampleEntityService;
import ${package}.test.config.UrlConfig;

/**
 * Verifies that {@link ExampleEntityController} handles requests with
 * pagination.
 * 
 * @author Bernardo Mart&iacute;nez Garrido
 */
public final class TestExampleEntityControllerPagination {

    /**
     * Argument captor for pagination data.
     */
    private ArgumentCaptor<Pageable>   captor;

    /**
     * Mocked MVC context.
     */
    private MockMvc                    mockMvc;

    /**
     * Mocked service.
     */
    private final ExampleEntityService service;

    /**
     * Default constructor;
     */
    public TestExampleEntityControllerPagination() {
        super();

        service = getExampleEntityService();
    }

    /**
     * Sets up the mocked MVC context.
     */
    @BeforeEach
    public final void setUpMockContext() {
        mockMvc = MockMvcBuilders
                .standaloneSetup(new ExampleEntityController(service))
                .setCustomArgumentResolvers(
                        new PageableHandlerMethodArgumentResolver())
                .alwaysExpect(MockMvcResultMatchers.status().isOk())
                .alwaysExpect(MockMvcResultMatchers.content()
                        .contentType(MediaType.APPLICATION_JSON))
                .build();
    }

    /**
     * Verifies that the page received as parameter is used for pagination.
     */
    @Test
    public final void testGet_Page_SetInPagination() throws Exception {
        final Pageable pageable;

        mockMvc.perform(getGetRequestWithPage());

        pageable = captor.getValue();

        Assertions.assertEquals(10, pageable.getPageNumber());
    }

    /**
     * Verifies that default pagination values are used when no pagination
     * parameters are received.
     */
    @Test
    public final void testGet_WithoutPagination_DefaultValues()
            throws Exception {
        final Pageable pageable;

        mockMvc.perform(getGetRequest());

        pageable = captor.getValue();

        Assertions.assertEquals(20, pageable.getPageSize());
        Assertions.assertEquals(0, pageable.getPageNumber());
    }

    /**
     * Returns a mocked service.
     * <p>
     * It is prepared for using the pagination data argument captor.
     * 
     * @return a mocked service
     */
    @SuppressWarnings({ "unchecked", "rawtypes" })
    private final ExampleEntityService getExampleEntityService() {
        final ExampleEntityService service;   // Mocked service
        final Collection<ExampleEntity> entities; // Returned entities

        service = Mockito.mock(ExampleEntityService.class);

        entities = new ArrayList<>();
        entities.add(Mockito.mock(ExampleEntity.class));
        entities.add(Mockito.mock(ExampleEntity.class));
        entities.add(Mockito.mock(ExampleEntity.class));

        captor = ArgumentCaptor.forClass(Pageable.class);

        Mockito.when(
                service.findByNameQuery(ArgumentMatchers.any(), captor.capture()))
                .thenReturn((Iterable) entities);

        return service;
    }

    /**
     * Returns a request builder prepared for reading entities.
     * 
     * @return a request builder prepared for reading entities
     */
    private final RequestBuilder getGetRequest() {
        return MockMvcRequestBuilders.get(UrlConfig.URL_REST)
                .contentType(MediaType.APPLICATION_JSON);
    }

    /**
     * Returns a request builder prepared for reading entities and a page set.
     * 
     * @return a request builder prepared for reading entities
     */
    private final RequestBuilder getGetRequestWithPage() {
        return MockMvcRequestBuilders.get(UrlConfig.URL_REST + "?page=10")
                .contentType(MediaType.APPLICATION_JSON);
    }

}
