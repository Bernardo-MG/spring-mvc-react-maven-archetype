/**
 * Copyright 2018 the original author or authors
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

package ${package}.test.unit.controller.rest;

import java.util.ArrayList;
import java.util.Collection;

import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.platform.runner.JUnitPlatform;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mockito;
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
 * Verifies that {@link ExampleEntityController} handles queries.
 * 
 * @author Bernardo Mart&iacute;nez Garrido
 */
@RunWith(JUnitPlatform.class)
public final class TestExampleEntityControllerQuery {

    /**
     * Argument captor for query data.
     */
    private ArgumentCaptor<String>     captor;

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
    public TestExampleEntityControllerQuery() {
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
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .build();
    }

    /**
     * Verifies that the query parameter is used for querying.
     */
    @Test
    public final void testGet_Query_SetsQuery() throws Exception {
        final String query;

        mockMvc.perform(getGetRequestWithQuery());

        query = captor.getValue();

        Assert.assertEquals("abc", query);
    }

    /**
     * Verifies that an empty string is used when there is no query.
     */
    @Test
    public final void testGet_NoQuery_Empty() throws Exception {
        final String query;

        mockMvc.perform(getGetRequest());

        query = captor.getValue();

        Assert.assertEquals("", query);
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

        captor = ArgumentCaptor.forClass(String.class);

        Mockito.when(service.getEntities(captor.capture(), Mockito.any()))
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
                .contentType(MediaType.APPLICATION_JSON_UTF8);
    }

    /**
     * Returns a request builder prepared for reading entities and a page set.
     * 
     * @return a request builder prepared for reading entities
     */
    private final RequestBuilder getGetRequestWithQuery() {
        return MockMvcRequestBuilders.get(UrlConfig.URL_REST + "?query=abc")
                .contentType(MediaType.APPLICATION_JSON_UTF8);
    }

}
